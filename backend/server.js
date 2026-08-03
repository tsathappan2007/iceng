// ===== IMPORTS =====
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ===== LOAD ENV =====
dotenv.config();

// ===== INIT APP =====
const app = express();

// ===== ENV CHECK =====
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env");
  process.exit(1);
}

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== FILE UPLOAD SETUP =====

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Static serving (optional)
app.use('/uploads', express.static(uploadDir));

// Multer config (memory storage)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files allowed'), false);
    }
  }
});

// ===== DATABASE CONNECTION =====
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ DB Connection Error:', err);
    process.exit(1);
  });

// ===== MODELS =====
const Contact = require('./models/Contact');
const Registration = require('./models/Registration');
const Paper = require('./models/Paper');

// ===== ROUTES =====

// 🔹 Contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🔹 Registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, phone, institution, category, paperId, dietary } = req.body;

    const regId = `REG-${Date.now().toString().slice(-6)}`;

    const registration = new Registration({
      name, email, phone, institution, category, paperId, dietary, regId
    });

    await registration.save();

    res.status(201).json({ success: true, regId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 🔹 Paper Submission
app.post('/api/submit-paper', upload.single('file'), async (req, res) => {
  try {
    const { author, email, title, track, coauthors, abstract } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "PDF required" });
    }

    const paperId = `ICENG-${Date.now().toString().slice(-6)}`;

    const paper = new Paper({
      paperId,
      author,
      email,
      title,
      track,
      coauthors,
      abstract,
      fileData: req.file.buffer,
      contentType: req.file.mimetype,
      fileName: req.file.originalname
    });

    await paper.save();

    res.status(201).json({ success: true, paperId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

// ===== EXPORT =====
module.exports = app;