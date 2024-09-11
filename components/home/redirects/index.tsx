import Image from "next/image";
import { useState } from "react";
import handleViewport from "react-in-viewport";
import { CardRedirect } from "ui/cards";
import { Subtitle } from "ui/typography";
import { CardsContainer, ImageContainer, Root } from "./styled";

export default function HomeRedirects() {
  const [animate, setAnimate] = useState(false);
  const redirects = [
    {
      title: "ALOJAMIENTO",
      src: "aloj.webp",
      path: "alojamientos",
    },
    {
      title: "SERVICIOS",
      src: "serv.webp",
      path: "servicios",
    },
    {
      title: "UBICACION",
      src: "ubic.webp",
      path: "ubicacion",
    },
  ];

  const Block = ({ forwardedRef }: any) => {
    return (
      <CardsContainer className={animate ? "animated" : ""} ref={forwardedRef}>
        {redirects?.map((a: any) => {
          return (
            <CardRedirect
              key={a.title}
              title={a.title}
              src={`/home/redirects/${a.src}`}
              path={a.path}></CardRedirect>
          );
        })}
      </CardsContainer>
    );
  };

  const ViewportBlock = handleViewport(Block);

  return (
    <Root>
      <ImageContainer>
        <Image
          src="/home/redirects/back-pileta.webp"
          layout="fill"
          objectFit="cover"
          alt="back-pileta"></Image>
        <Subtitle weight="600">VIVÍ Y SENTÍ LA ESENCIA DE LO NATURAL</Subtitle>
      </ImageContainer>
      <ViewportBlock
        onEnterViewport={() => setAnimate(true)}
        onLeaveViewport={() => setAnimate(false)}></ViewportBlock>
    </Root>
  );
}
