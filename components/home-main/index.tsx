import HomeBanner from "components/home-banner";
import Image from "next/image";
import Carousel from "nuka-carousel";
import piletaHome from "public/home.png";
import parqueHome from "public/parque-home.png";
import { useState } from "react";
import { ImageContainer, Root } from "./styled";

export default function HomeMain() {
  const [slider, setSlider] = useState(true);

  function changeSlider() {
    setSlider(!slider);
  }

  // setTimeout(changeSlider, 5000);

  return (
    <Root>
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
        }}
      >
        <ImageContainer>
          <Image
            src={piletaHome}
            layout="fill"
            objectFit="cover"
            priority={true}
          ></Image>
          {slider == true ? (
            <HomeBanner type="pileta" path="servicios"></HomeBanner>
          ) : null}
        </ImageContainer>
        <ImageContainer>
          <Image src={parqueHome} layout="fill" objectFit="cover"></Image>
          {slider == false ? (
            <HomeBanner type="parque" path="alojamientos"></HomeBanner>
          ) : null}
        </ImageContainer>
      </Carousel>
    </Root>
  );
}
