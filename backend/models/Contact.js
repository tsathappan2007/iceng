const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
  name: { 
    type: String,
    trim: true,
    required: true 
  },
  email: { 
    type: String,
    unique: true,
    required: true 
  },
  topic: { 
    type: String,
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
