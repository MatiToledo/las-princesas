import CarouselComp from "components/carousel";
import { Camera, IconService } from "ui/icons";
import { Body, Caracteristic, Subtitle, Title } from "ui/typography";
import {
  CaracteristicContainer,
  Content,
  Equipament,
  Root,
  SeeMore,
  ServiceContainer,
} from "./styled";
import { ButtonPrimary } from "ui/buttons";

export default function CabanaComp({ cabana }: any) {
  return (
    <Root>
      <Title>{cabana.title}</Title>
      <Content>
        <CarouselComp images={cabana.images}></CarouselComp>
        <CaracteristicContainer cant={cabana.description.length}>
          {cabana?.description?.map((a: any) => {
            return <Caracteristic key={a}>{a}</Caracteristic>;
          })}
          <SeeMore
            href={cabana.googleDriveLink}
            rel="noopener noreferrer"
            target="_blank">
            <Body color="var(--gray-strong)">VER MÁS</Body>
            <Camera></Camera>
          </SeeMore>
        </CaracteristicContainer>
      </Content>
      <Equipament>
        <Subtitle color="var(--gray-weak)">EQUIPAMIENTO</Subtitle>
        <ServiceContainer>
          {cabana?.equipment?.map((a: any) => {
            return (
              <IconService
                key={a.description}
                src={a.img}
                body={a.description}
                type="small"></IconService>
            );
          })}
        </ServiceContainer>
      </Equipament>
    </Root>
  );
}
