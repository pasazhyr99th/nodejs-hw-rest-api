const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASSWORD, EMAIL_FROM } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
});

const sendEmail = (message) => {
  message.from = EMAIL_FROM;
  return transport.sendMail(message);
};

module.exports = sendEmail;