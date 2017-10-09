const nodemailer = require('nodemailer');

const send = (mailObject) =>{
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Anchal" <anchal.jain@tothenew.com>', // sender address
    to: mailObject.email, // list of receivers
    subject: 'Notification mail', // Subject line
    text: 'Hello Newer', // plain text body
    html: `<p> Your Friend ${mailObject.User.username} has tagged you in a Comment </p>`
    +mailObject.todo+":"+mailObject.tagcomment
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Not able to send mail");
      // res.send("Not able to send mail");
    }
    console.log('Message %s sent: %s', info);
    //res.send("mail send successfully")
  });
};

module.exports = {
  send:send,
};
