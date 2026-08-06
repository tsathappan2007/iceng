const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    clerkId: { 
      type: String, 
      required: true,
      unique: true 
    },
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true,
      unique: true
    },
    institution: { 
      type: String, 
      default: '' 
    },
    phone: { 
      type: String, 
      default: '' 
    },
    department: { 
      type: String, 
      default: '' 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
