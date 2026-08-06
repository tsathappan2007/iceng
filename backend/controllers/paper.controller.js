const Paper = require('../models/Paper');

exports.submitPaper = async (req, res) => {
  try {
    const { author, email, title, track, coauthors, abstract, driveLink, fileUrl } = req.body;

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
      driveLink: paperLink
    });

    await newPaper.save();

    console.log(`✅ Paper Saved to DB: ${paperId} - "${title}" by ${author}`);

    return res.status(201).json({
      success: true,
      message: 'Paper submitted successfully and stored in DB',
      paperId
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