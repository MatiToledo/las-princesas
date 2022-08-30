import { sendgridEmail } from "lib/sendgrid";

type emailProps = {
  email: string;
  message: string;
  name?: string;
};

export async function sendEmail({ email, message, name }: emailProps) {
  const cleanEmail = email.trim().toLowerCase();

  const msg = {
    to: "lasprincesascabanasfrentealrio@gmail.com",
    from: "lasprincesascabanasfrentealrio@gmail.com",
    subject: `Consulta desde la pagina de ${name}`,
    text: message,
  };

  try {
    const emailSended = await sendgridEmail(msg);
    if (emailSended) {
      return true;
    }
  } catch (error) {
    return error;
  }
}
