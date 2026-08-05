const Paper = require('../models/Paper');
const mongoose = require('mongoose');

exports.submitPaper = async (req, res) => {

    try {

        const { author, email, title, track, coauthors, abstract, fileUrl } = req.body;

        const mailExists = await Paper.findOne( { email } );

        if( mailExists) {
            return res.status(400).json({
                success: false,
                message: 'Paper already submitted with this email'
            })
        }
        
        const newPaper = new Paper({
            author,
            email,
            title, 
            track,
            coauthors,
            abstract,
            fileUrl
        })

        await newPaper.save();

        return res.status(201).json({
            success: true,
            message: 'Paper submitted successfully',
        })

    }catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}