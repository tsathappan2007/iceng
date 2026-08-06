const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema(
  {
    paperId: {
      type: String,
      unique: true,
      required: true
    },
    author: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
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
      default: ''
    },
    abstract: { 
      type: String, 
      default: ''
    }, 
    driveLink: { 
      type: String, 
      required: true 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', paperSchema);
