const nodemailer = require('nodemailer');
require('dotenv').config()


// async..await is not allowed in global scope, must use a wrapper
const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"Myntra |" <${process.env.MAIL_USER}>`, // sender address
            to: `${email}`, // list of receivers
            subject: `${title}`, // Subject line
            html: `${body}`, // plain text body
        });

        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.log(err);
    }
}


module.exports = mailSender;


