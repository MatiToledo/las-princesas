import Image from "next/image";
import { CardsContainer, ImageContainer, Root } from "./styled";
import pileta from "public/back-pileta.png";
import { Large, Subtitle } from "ui/typography";
import { CardRedirect } from "ui/cards";
import aloj from "/public/aloj.png";
import serv from "/public/serv.png";
import ubic from "/public/ubic.png";

export default function HomeRedirects() {
  return (
    <Root>
      <ImageContainer>
        <Image src={pileta} layout="fill" objectFit="cover"></Image>
        <Subtitle weight="600">VIVÍ Y SENTÍ LA ESENCIA DE LO NATURAL</Subtitle>
        <Large color="var(--white)">
          NOS ENCONTRAMOS EN MEDIO DE LAS SIERRAS, SOLO CRUZANDO LA CALLE ESTAS
          A ORILLAS DEL RÍO
        </Large>
      </ImageContainer>
      <CardsContainer>
        <CardRedirect title="ALOJAMIENTO" src={aloj}></CardRedirect>
        <CardRedirect title="SERVICIOS" src={serv}></CardRedirect>
        <CardRedirect title="UBICACION" src={ubic}></CardRedirect>
      </CardsContainer>
    </Root>
  );
}
