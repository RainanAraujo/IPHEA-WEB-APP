import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "../../lib/email";
import EmailTemplate from "@/template/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message, cpfCnpj, phone, whatsapp, type, file } =
    req.body;

  console.log(name);
  await sendEmail(
    {
      to: "rainanpevit@gmail.com",
      subject: "Welcome to NextAPI",
      html: render(EmailTemplate()),
    },
    [
      {
        filename: "logo.png",
        content: "asdfas",
      },
    ]
  );

  return res.status(200).json({ message: "Email sent successfully" });
}
