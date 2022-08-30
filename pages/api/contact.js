/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer';



export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user, // generated ethereal user
        pass: process.env.pass, // generated ethereal password
      },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'arun02580@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
     
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};