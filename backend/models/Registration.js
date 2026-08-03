const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {

    name: { 
      type: String, 
      required: true 
    },

    email: { 
      type: String, 
      required: true 
    },

    phone: { 
      type: String, 
      required: true 
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
      type: String 
    },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
