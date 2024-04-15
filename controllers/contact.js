const contacts = require('../models/contactus.js');
const { configureMail } = require('./mailConfig.js');

exports.contactus = async (req, res) => {
    const { name,mobileNumber,email,message } = req.body;
    try {
        await contacts.create({ name,mobileNumber,email,message  });
        return res.status(201).json({ success: true, message: "We will reach you soon..!" });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Contact not reached. Try Again" });
    }
};

exports.sendemail = async (req, res) => {
    const { email, mobileNumber } = req.body;
    const message = `New contact details:\nEmail: ${email}\nPhone Number: ${mobileNumber}`;

    try {
        const transporter = await configureMail();
        await transporter.sendMail({
            from: 'NanoQuestTech Contact Page <support@nanoquesttech.in>',
            to: 'info@proptelligence.net',
            subject: 'New Contact Details',
            text: message,
        });

        return res.status(200).json({ success: true, message: 'Contact details sent successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to send contact details' });
    }
};
