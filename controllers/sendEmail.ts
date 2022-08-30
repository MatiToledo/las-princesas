import { sendgridEmail } from "lib/sendgrid";

type emailProps = {
  email: string;
  message: string;
  name: string;
  from: string;
  until: string;
  adults: string;
  kids: string;
};

export async function sendEmail({
  email,
  message,
  name,
  from,
  until,
  adults,
  kids,
}: emailProps) {
  const cleanEmail = email.trim().toLowerCase();
  const personas = parseInt(adults) + parseInt(kids);

  const msg = {
    to: "lasprincesascabanasfrentealrio@gmail.com",
    from: "lasprincesascabanasfrentealrio@gmail.com",
    subject: `Consulta desde la pagina de ${name}`,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <style type="text/css">
          body,
          p,
          div {
            font-family: arial, helvetica, sans-serif;
            font-size: 14px;
          }
          body {
            color: #000000;
          }
          body a {
            color: #1188e6;
            text-decoration: none;
          }
          p {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div style="height: 50px; width: 100%; background-color:#ffd600;"></div>
        <h4 style="text-align: left">Nuevo mensaje de: ${name}</h4>
        <p  style="
        color: black;
        font-family: arial, helvetica, sans-serif;
        font-size: 16px;
        font-weight: 400;
        ">
        Desde el: ${from} hasta el: ${until} 
        <br>
        <br>
        Para ${personas} personas - ${adults} mayores y ${kids} menores 
        <br>
        <br>
        Informacion adicional: ${message}
        </p>
        <br>
        <br>
        <p>Responder: <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <div style="height: 50px; width: 100%; background-color:#ffd600;"></div>
      </body>
    </html>
    `,
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
