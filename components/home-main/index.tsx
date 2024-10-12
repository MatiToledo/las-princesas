import HomeBanner from "components/home-banner";
import Image from "next/image";
import Carousel from "nuka-carousel";
import piletaHome from "public/home.webp";
import parqueHome from "public/parque-home.webp";
import { useState } from "react";
import { Hack, ImageContainer, Root } from "./styled";
import { Title } from "ui/typography";

export default function HomeMain() {
  const [slider, setSlider] = useState(true);

  function changeSlider() {
    setSlider(!slider);
  }

  return (
    <Root>
      <Hack>NOS HACKAERON EL WHATSAPP, PORFAVOR NO HAGA NINGUNA OPERACION</Hack>
      <Carousel
        pauseOnHover={false}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: "none",
          },
        }}
        autoplay={true}
        autoplayInterval={7000}
        wrapAround={true}
        speed={2000}
        dragging={false}
        swiping={false}
        afterSlide={() => {
          changeSlider();
        }}>
        <ImageContainer>
          <Image
            src={piletaHome}
            layout="fill"
            objectFit="cover"
            priority={true}
            alt="pileta"></Image>
          {slider == true ? (
            <HomeBanner type="pileta" path="servicios"></HomeBanner>
          ) : null}
        </ImageContainer>
        <ImageContainer>
          <Image
            src={parqueHome}
            layout="fill"
            objectFit="cover"
            alt="parque"></Image>
          {slider == false ? (
            <HomeBanner type="parque" path="alojamientos"></HomeBanner>
          ) : null}
        </ImageContainer>
      </Carousel>
    </Root>
  );
}
