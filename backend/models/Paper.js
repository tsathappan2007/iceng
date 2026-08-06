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
    registrationCategory: {
      type: String,
      default: 'Indian Academic Author'
    },
    feeAmount: {
      type: String,
      default: '₹ 7,500'
    },
    paymentMode: {
      type: String,
      default: 'Online Payment'
    },
    paymentStatus: {
      type: String,
      default: 'Completed'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', paperSchema);
