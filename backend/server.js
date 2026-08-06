// ===== IMPORTS =====
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Router Imports
const contactRouter = require('./routes/contact.route');
const RegisterRouter = require('./routes/registration.route');
const PaperRouter = require('./routes/paper.route');
const UserRouter = require('./routes/user.route');

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
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Database (iceng)....'))
  .catch(err => {
    console.error('❌ DB Connection Error:', err);
    process.exit(1);
  });

// ===== HEALTH CHECK ROUTE =====
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "ICENG Backend Server is up and running",
    success: true
  });
});

// ===== API ROUTES =====
app.use('/api/user', UserRouter);
app.use('/api/sync-user', UserRouter);
app.use('/user', UserRouter);

app.use('/api/submit-paper', PaperRouter);
app.use('/paper', PaperRouter);

app.use('/contact', contactRouter);
app.use('/registration', RegisterRouter);

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Backend Server running on port ${PORT}....`);
  });
}

// ===== EXPORT =====
module.exports = app;