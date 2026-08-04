// ===== IMPORTS =====
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');



//==============Router Imports ==================
const contactRouter = require('./routes/contact.route');




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




// ===== DATABASE CONNECTION =====
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB....'))
  .catch(err => {
    console.error('DB Connection Error:', err);
    process.exit(1);
  });


// ===== ROUTES =====
app.use('health', (req, res) => {

  try{
  res.status(200).json( {
    status: 200,
    message: "Server is up and running",
    success: true
  })
} catch(err) {
  res.status(500).json({
    status: 500,
    message: err.message,
    success: false
  })
}
})
app.use('/api/contact', contactRouter);

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

    const paperId = `ICAING-${Date.now().toString().slice(-6)}`;

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
    console.log(`Server running on port ${PORT}....`);
  });
}

// ===== EXPORT =====
module.exports = app;