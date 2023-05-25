import nodemailer from "nodemailer";
import { type } from "os";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

type EmailAttachment = {
  filename: string;
  content: string | Buffer;
};

const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.mailtrap.io",
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "user",
    pass: process.env.SMTP_PASSWORD || "password",
  },
};

export const sendEmail = async (
  data: EmailPayload,
  attachments: EmailAttachment[] = []
) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
    attachments,
  });
};
