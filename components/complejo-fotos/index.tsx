import { useComplejoFotos } from "hooks";
import Image from "next/image";
import { Title } from "ui/typography";
import { PhotoImgContainer, PhotosContainer, Root } from "./styled";

export default function ComplejoFotos() {
  const fotos = useComplejoFotos();

  return (
    <Root>
      <Title>NUESTRO COMPLEJO</Title>
      <PhotosContainer>
        {fotos?.map((a: any) => {
          return (
            <PhotoImgContainer key={a.id}>
              <Image src={a.img} layout="fill" objectFit="cover"></Image>
            </PhotoImgContainer>
          );
        })}
      </PhotosContainer>
    </Root>
  );
}
