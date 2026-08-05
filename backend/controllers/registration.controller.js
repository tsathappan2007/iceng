const User = require('../models/User');
const mongoose = require('mongoose');

exports.registerUser = async (req, res) => {

    try {

        const {name, email, phone, institution, category, dietary} = req.body;

        const userExists = await User.findOne( { email, phone});

        if (userExists) {
            return res.status(400).json( {
                success: false,
                message: 'user with mail or phone already exists'
            })
        }
   

        const newUser = new User({
            name,
            email,
            phone, 
            institution,
            category,
            dietary
        })

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
        })

    }catch( err ) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

