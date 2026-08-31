import Image from "next/image";
import pileta from "public/back-pileta.webp";
import { useState } from "react";
import handleViewport from "react-in-viewport";
import { CardRedirect } from "ui/cards";
import { Subtitle } from "ui/typography";
import { CardsContainer, ImageContainer, Root } from "./styled";
import aloj from "/public/aloj.webp";
import serv from "/public/serv.webp";
import ubic from "/public/ubic.webp";

export default function HomeRedirects() {
  const [animate, setAnimate] = useState(false);

  const Block = ({ forwardedRef }: any) => {
    return (
      <CardsContainer className={animate ? "animated" : ""} ref={forwardedRef}>
        <CardRedirect
          title="ALOJAMIENTO"
          src={aloj}
          path="alojamientos"
          alt="Interior de una cabaña equipada en Cabañas Las Princesas, Los Reartes"
        ></CardRedirect>
        <CardRedirect
          title="SERVICIOS"
          src={serv}
          path="servicios"
          alt="Servicios del complejo: pileta, quincho y espacios comunes"
        ></CardRedirect>
        <CardRedirect
          title="UBICACION"
          src={ubic}
          path="ubicacion"
          alt="El río Los Reartes y las sierras, frente al complejo"
        ></CardRedirect>
      </CardsContainer>
    );
  };

  const ViewportBlock = handleViewport(Block);

  return (
    <Root>
      <ImageContainer>
        <Image
          src={pileta}
          layout="fill"
          objectFit="cover"
          alt="Pileta del complejo rodeada de parque, en Los Reartes"
        ></Image>
        <Subtitle weight="600">VIVÍ Y SENTÍ LA ESENCIA DE LO NATURAL</Subtitle>
      </ImageContainer>
      <ViewportBlock
        onEnterViewport={() => setAnimate(true)}
        onLeaveViewport={() => setAnimate(false)}
      ></ViewportBlock>
    </Root>
  );
}
