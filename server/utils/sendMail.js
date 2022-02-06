const nodeMailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendMail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false, 
        // service: process.env.SMTP_SERVICE,
        auth: {
            user: "04ea6b3395125b",
            pass: "6627cd8d1c4824",
        },
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions);
}

module.exports = sendMail;