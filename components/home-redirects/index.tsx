import Image from "next/image";
import pileta from "public/back-pileta.png";
import { useState } from "react";
import handleViewport from "react-in-viewport";
import { CardRedirect } from "ui/cards";
import { Subtitle } from "ui/typography";
import { CardsContainer, ImageContainer, Root } from "./styled";
import aloj from "/public/aloj.png";
import serv from "/public/serv.png";
import ubic from "/public/ubic.png";

export default function HomeRedirects() {
  const [animate, setAnimate] = useState(false);

  const Block = ({ forwardedRef }: any) => {
    return (
      <CardsContainer className={animate ? "animated" : ""} ref={forwardedRef}>
        <CardRedirect
          title="ALOJAMIENTO"
          src={aloj}
          path="alojamientos"
        ></CardRedirect>
        <CardRedirect
          title="SERVICIOS"
          src={serv}
          path="servicios"
        ></CardRedirect>
        <CardRedirect
          title="UBICACION"
          src={ubic}
          path="ubicacion"
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
          alt="back-pileta"
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
