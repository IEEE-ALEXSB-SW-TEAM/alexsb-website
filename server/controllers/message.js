const nodemailer = require('nodemailer');
const transport = require('../config/mail.json');

const transporter = nodemailer.createTransport(transport);

const message = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'fail' });
  }

  const senderEmail = `${name} <${email}>`;
  const yourEmail = `${transport.from.address}`;
  const content = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;
  const mail = {
    from: senderEmail,
    to: yourEmail,
    subject: `New IEEE-Website Message from ${name}`,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });

      transporter.sendMail({
        from: yourEmail,
        to: email,
        subject: 'Message received by IEEE-AlexSB',
        text: `Hi ${name},\n\nThank you for sending us a message. We will get back to you soon.\n\nBest Regards,\n${transport.from.name}`,
        html: `<p>Hi ${name},<br><br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${transport.from.name}</p>`,
      }, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Auto Reply Message sent: ' + info.response);
        }
      });
    }
  });
};

module.exports = message;
