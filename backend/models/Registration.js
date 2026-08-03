const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  regId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  institution: { type: String, required: true },
  category: { type: String, required: true },
  paperId: { type: String },
  dietary: { type: String },
  status: { type: String, default: 'Pending Payment' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
