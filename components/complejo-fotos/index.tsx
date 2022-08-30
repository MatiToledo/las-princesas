import Image from "next/image";
import { Title } from "ui/typography";
import { PhotoImgContainer, PhotosContainer, Root } from "./styled";

export default function ComplejoFotos({ images }: any) {
  return (
    <Root>
      <Title>NUESTRO COMPLEJO</Title>
      <PhotosContainer>
        {images.map((a: any) => {
          return (
            <PhotoImgContainer key={a.id}>
              <Image
                src={a.img}
                layout="fill"
                objectFit="cover"
                alt={a}
              ></Image>
            </PhotoImgContainer>
          );
        })}
      </PhotosContainer>
    </Root>
  );
}
