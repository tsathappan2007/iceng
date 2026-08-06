const Paper = require('../models/Paper');

exports.submitPaper = async (req, res) => {
  try {
    const {
      author,
      email,
      title,
      track,
      coauthors,
      abstract,
      driveLink,
      fileUrl,
      registrationCategory,
      feeAmount,
      paymentMode,
      paymentStatus
    } = req.body;

    const paperLink = driveLink || fileUrl;

    if (!author || !email || !title || !track || !paperLink) {
      return res.status(400).json({
        success: false,
        message: 'Author, email, title, track, and driveLink/fileUrl are required.'
      });
    }

    const paperId = `ICAING-${Date.now().toString().slice(-6)}`;

    const newPaper = new Paper({
      paperId,
      author,
      email,
      title,
      track,
      coauthors: coauthors || '',
      abstract: abstract || '',
      driveLink: paperLink,
      registrationCategory: registrationCategory || 'Indian Academic Author',
      feeAmount: feeAmount || '₹ 7,500',
      paymentMode: paymentMode || 'Online Payment Gateway',
      paymentStatus: paymentStatus || 'Completed'
    });

    await newPaper.save();

    console.log(`✅ Paper & Payment Saved to DB: ${paperId} - "${title}" by ${author} [${registrationCategory}: ${feeAmount}]`);

    return res.status(201).json({
      success: true,
      message: 'Paper & registration payment submitted successfully and stored in DB',
      paperId,
      feeAmount,
      registrationCategory
    });

  } catch (err) {
    console.error('Paper submission error:', err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.getPapers = async (req, res) => {
  try {
    const papers = await Paper.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: papers.length,
      papers
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};