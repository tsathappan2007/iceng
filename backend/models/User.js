const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {

    name: { 
      type: String, 
      required: true 
    },

    email: { 
      type: String, 
      required: true,
      unique: true
    },

    phone: { 
      type: String, 
      required: true,
      unique: true
    },

    institution: { 
      type: String, 
      required: true 
    },

    category: { 
      type: String, 
      required: true 
    },

    dietary: { 
      type: String,
      enum: ['Vegetarian', 'Non-Vegetarian'],
      default: 'Vegetarian'
    },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
