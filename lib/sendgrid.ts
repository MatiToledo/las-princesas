import sgMail, { MailDataRequired } from "@sendgrid/mail";
sgMail.setApiKey(process.env.API_SENDGRID as string);

export async function sendgridEmail(msg: MailDataRequired) {
  try {
    await sgMail
      .send(msg)
      .then((response) => {
        console.log("STATUS SENDEMAIL", response[0].statusCode);
      })
      .catch((error) => {
        console.error("este es el error", error.response.body);
      });
  } catch (error) {
    return error;
  }
}
