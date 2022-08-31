import ReactWhatsapp from "react-whatsapp";
import { Facebook, Instagram, Mail, Phone, Ubication } from "ui/icons";
import { Body } from "ui/typography";
import { Root, Social, WhatsappLogo } from "./styled";
import whatsapp from "public/whatsapp.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <Root>
      <ReactWhatsapp
        number="+54 9 351 564 2035"
        message={`¡Hola! ${"\n"} Para brindarte una mejor atención, por favor complete la siguiente información: ${"\n"}- Fecha por la que desea consultar:${"\n"}- Cantidad de pasajeros (si hay menores, especificar la edad de cada menor):${"\n"}¡Gracias!`}
        element="div"
      >
        <WhatsappLogo>
          <Image
            src={whatsapp}
            width={58}
            height={58}
            alt="whatsapp"
            layout="responsive"
          ></Image>
        </WhatsappLogo>
      </ReactWhatsapp>
      <Social>
        <Facebook />
        <Instagram />
        <Phone />
        <Mail />
        <Ubication />
      </Social>
      <Body color="var(--white)">© Cabañas Las Princesas</Body>
    </Root>
  );
}
