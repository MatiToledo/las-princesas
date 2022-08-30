import { validateBody } from "controllers/middlewares";
import { sendEmail } from "controllers/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

let bodySchema = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string(),
    message: yup.string(),
  })
  .noUnknown(true)
  .strict();

async function contact(req: NextApiRequest, res: NextApiResponse) {
  const mailSended = await sendEmail(req.body);
  if (mailSended instanceof Error) res.status(400).send({ ok: false });
  res.status(200).send({ ok: true });
}

//name, comment, email
export default validateBody(bodySchema, contact);
