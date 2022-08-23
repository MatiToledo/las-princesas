import { ImageContainer, Root } from "./styled";
import Carousel from "nuka-carousel";
import Image from "next/image";
import { Next, Prev } from "ui/icons";

export default function CarouselComp({ images }: any) {
  return (
    <Root>
      <Carousel
        wrapAround={true}
        autoplay={true}
        speed={2000}
        renderCenterRightControls={({ nextSlide }) => (
          <Next onClick={nextSlide}>Next</Next>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <Prev onClick={previousSlide}>Previous</Prev>
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "white",
          },
        }}
      >
        {images?.map((a: any) => {
          return (
            <ImageContainer key={a}>
              <Image
                priority={true}
                src={a}
                layout="fill"
                objectFit="cover"
              ></Image>
            </ImageContainer>
          );
        })}
      </Carousel>
    </Root>
  );
}
