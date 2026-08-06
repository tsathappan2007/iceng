const User = require('../models/User');

// Sync user from Clerk to MongoDB
exports.syncUser = async (req, res) => {
  try {
    const { clerkId, name, email, institution, phone, department } = req.body;

    if (!clerkId || !email) {
      return res.status(400).json({
        success: false,
        message: 'clerkId and email are required'
      });
    }

    // Upsert user in MongoDB
    const user = await User.findOneAndUpdate(
      { clerkId },
      {
        clerkId,
        name: name || 'IEEE Author',
        email,
        institution: institution || '',
        phone: phone || '',
        department: department || ''
      },
      { new: true, upsert: true }
    );


    return res.status(200).json({
      success: true,
      message: 'User synced successfully',
      user
    });

  } catch (err) {
    console.error('User sync error:', err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Get user profile by clerkId or email
exports.getUserProfile = async (req, res) => {
  try {
    const { clerkId } = req.params;
    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found in database'
      });
    }

    return res.status(200).json({
      success: true,
      user
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
