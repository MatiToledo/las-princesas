import ReactWhatsapp from "react-whatsapp";
import { Facebook, Instagram, Mail, Phone, Ubication } from "ui/icons";
import { Body } from "ui/typography";
import { Root, Social, WhatsappLogo } from "./styled";

export default function Footer() {
  return (
    <Root>
      <ReactWhatsapp number="+54 9 351 564 2035" message="Hola!" element="div">
        <WhatsappLogo></WhatsappLogo>
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
