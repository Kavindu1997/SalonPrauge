const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PWD,
  },
});

const sendEmail = (values) => {
  const mailOptions = {
    from: process.env.MAIL_PWD,
    to: "kavindu.s@eyepax.com",
    subject: "Your Payment Confirmation #Transaction",
    html: `
      <body>
      <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #b99a5f; padding: 20px 0  margin: 0 auto">
          <a ><img
              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666175300/logo_black_copydsd_d3azq9.png"
              style="width: 100%; height: 100px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.8rem; padding: 0 0px">
              Hi ${values["firstname"]},
            </p>
            <P style="width: 100%; gap: 10px; padding: 0px 20px; display: grid;">Thank you for using the service of Salon Prauge. Your payment was successfully processed and here is your booking details.</P>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Name: <b>${values["firstname"]} ${values["lastname"]}</b></p>
              <p>Email: <b>${values["email"]}</b></p>
              <p>Service: <b>${values["serviceId"]}</b></p>
              <p>Date: <i>${values["date"]}</i></p>
              <p>Time: <i>${values["time"]}</i></p>
            </div>
            <p style="width: 100%; gap: 10px; padding: 0px 20px; display: grid">Thank you & Stay safe.</p>
            <div style="width: 100%; gap: 10px; padding: 0px 20px; display: grid">Best wishes,</div>
            <div style="width: 100%; gap: 10px; padding: 0px 20px; display: grid">Salon Prauge.</div>
          </div>
        </div>
      </div>
          `,
  };

  transport.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = sendEmail;
