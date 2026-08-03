const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
  paperId: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  track: { type: String, required: true },
  coauthors: { type: String },
  abstract: { type: String, required: true },
  fileData: { type: Buffer, required: true },
  contentType: { type: String, required: true },
  fileName: { type: String, required: true },
  status: { type: String, default: 'Submitted' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', paperSchema);
