import type { NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "../../lib/email";
import EmailTemplate from "@/template/email";
import multer from "multer";
import nextConnect from "next-connect";
import { Request } from "express";

const upload = multer({ storage: multer.memoryStorage() }).single("file");

export default nextConnect().use(upload).post(handler);

async function handler(req: Request, res: NextApiResponse) {
  const file = req.file;
  const {
    name,
    email,
    message,
    cpfCnpj,
    phone,
    whatsapp,
    type,
    typeSubject,
    vinculo,
  } = req.body;
  await sendEmail(
    {
      to: "contato@iphea.org.br",
      subject: `Nova solicitação ${typeSubject}`,
      html: render(
        EmailTemplate({
          title: `Nova solicitação ${typeSubject}`,
          body: [
            { label: "Nome", value: name as string },
            { label: "Email", value: email as string },
            { label: "Mensagem", value: message as string },
            { label: "CPF/CNPJ", value: cpfCnpj as string },
            { label: "Telefone", value: phone as string },
            { label: "Whatsapp", value: whatsapp as string },
            { label: "Tipo", value: type as string },
            { label: "Vínculo", value: vinculo as string },
          ],
        })
      ),
    },
    file && [
      {
        filename: file.originalname,
        content: file.buffer,
      },
    ]
  );

  return res.status(200).json({ message: "Email sent successfully" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
