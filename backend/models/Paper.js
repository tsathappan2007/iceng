const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema(
  {
    author: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String,
      unique: true, 
      required: true 
    },
    title: { 
      type: String, 
      required: true 
    },
    track: { 
      type: String, 
      required: true 
    },
    coauthors: { 
      type: String,
      required: false
    },
    abstract: { 
      type: String, 
      required: true 
    }, 
    fileUrl: { 
      type: String, 
      required: true 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', paperSchema);
