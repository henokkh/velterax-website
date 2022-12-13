// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type Message = {
  message: string;
};

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_RECIEVER = process.env.EMAIL_RECIEVER;
const EMAIL_APP_PASSWORDD = process.env.EMAIL_APP_PASSWORDD;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const { customerName, customerEmailAddress, customerMessage } = req.body;

  // TODO: Validate that form data is what you expect
  // TODO: Send status code 400 for invalid form data

  console.log({ data: req.body });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_APP_PASSWORDD,
    },
  });

  const mailOptions = {
    from: EMAIL_SENDER,
    to: EMAIL_RECIEVER,
    subject: "Veltrax Homepage Contact Form",
    text: `
    Customer Name: ${customerName}
    Customer Email Address: ${customerEmailAddress}
    Message: ${customerMessage}
  
  `,
  };

  // @ts-ignore
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email Sent: " + info.response);
      res.status(200).json({ message: "Message sent successfully" });
    }
  });
}
