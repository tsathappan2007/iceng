const mongoose = require('mongoose');
const Contact = require('../models/Contact');

exports.submitContact = async (req,res) => {

  try {
    const { name, email, topic, message } = req.body;

    const mailExists = await Contact.findOne({ email });
    if( mailExists) {
      return res.status(400).json({
        success: false,
        message: "mail already exists"
      })
    }

    const contact = new Contact({ name, email, topic, message });
    await contact.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }

}