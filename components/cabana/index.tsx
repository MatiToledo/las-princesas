import CarouselComp from "components/carousel";
import { IconService } from "ui/icons";
import { Caracteristic, Subtitle, Title } from "ui/typography";
import {
  CaracteristicContainer,
  Content,
  Equipament,
  Root,
  ServiceContainer,
} from "./styled";

export default function CabanaComp({ cabana }: any) {
  console.log("cabana: ", cabana);
  return (
    <Root>
      <Title>{cabana.title}</Title>
      <Content>
        <CarouselComp images={cabana.images}></CarouselComp>
        <CaracteristicContainer>
          {cabana?.descriptions?.map((a: any) => {
            return <Caracteristic key={a}>{a}</Caracteristic>;
          })}
        </CaracteristicContainer>
      </Content>
      <Equipament>
        <Subtitle color="var(--gray-weak)">EQUIPAMIENTO</Subtitle>
        <ServiceContainer>
          {cabana?.equipments?.map((a: any) => {
            return (
              <IconService
                key={a.description}
                src={a.src}
                body={a.description}
                type="small"></IconService>
            );
          })}
        </ServiceContainer>
      </Equipament>
    </Root>
  );
}
