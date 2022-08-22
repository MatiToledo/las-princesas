import styled from "styled-components";
import MenuIcon from "./menu.svg";
import CloseIcon from "./close.svg";
import WhatsappIcon from "./whatsapp.svg";
import FacebookSVG from "./facebook.svg";
import InstagramSVG from "./instagram.svg";
import MailSVG from "./mail.svg";
import PhoneSVG from "./phone.svg";
import UbicSVG from "./map.svg";
import { Body } from "ui/typography";
import Image, { StaticImageData } from "next/image";

export const Burguer = styled(MenuIcon)`
  width: 35px;
  height: 35px;
  stroke: var(--gray-strong);
`;

export const Close = styled(CloseIcon)`
  stroke: var(--gray-strong);
  width: 20px;
  height: 20px;
`;

export const Whatsapp = styled(WhatsappIcon)`
  display: flex;
  fill: var(--white);
  width: 40px;
  height: 40px;
`;
export const PhoneIcon = styled(PhoneSVG)`
  display: flex;
  width: 25px;
  height: 25px;
`;
export function Phone() {
  return (
    <a href="tel:+54 9 351 564 2035">
      <PhoneIcon></PhoneIcon>
    </a>
  );
}
export const FacebookIcon = styled(FacebookSVG)`
  display: flex;
  width: 25px;
  height: 25px;
`;
export function Facebook() {
  return (
    <a href="https://www.facebook.com/lasprincesas.cabanas">
      <FacebookIcon></FacebookIcon>
    </a>
  );
}
export const InstagramIcon = styled(InstagramSVG)`
  display: flex;
  width: 25px;
  height: 25px;
`;
export function Instagram() {
  return (
    <a href="https://www.instagram.com/lasprincesas.cabanas/">
      <InstagramIcon></InstagramIcon>
    </a>
  );
}

export const MailIcon = styled(MailSVG)`
  display: flex;
  width: 25px;
  height: 25px;
`;
export function Mail() {
  return (
    <a href="mailto:lasprincesascabanasfrentealrio@gmail.com">
      <MailIcon></MailIcon>
    </a>
  );
}
export const UbicationIcon = styled(UbicSVG)`
  display: flex;
  width: 25px;
  height: 25px;
`;
export function Ubication() {
  return (
    <a href="https://www.google.com.ar/maps/place/Caba%C3%B1as+las+Princesas/@-31.9266585,-64.5980801,17z/data=!3m1!4b1!4m8!3m7!1s0x95d2b162e20f63ef:0xcd1a925e1472fd0f!5m2!4m1!1i2!8m2!3d-31.9266631!4d-64.5958914">
      <UbicationIcon></UbicationIcon>
    </a>
  );
}

//SERVICES CARD

const RootServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 150px;
`;

type CardServiceProps = {
  src: StaticImageData;
  body: string;
};
export function IconService({ src, body }: CardServiceProps) {
  return (
    <RootServices>
      <Image src={src} width={100} height={100} layout="fixed"></Image>
      <Body>{body}</Body>
    </RootServices>
  );
}
