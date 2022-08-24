import CarouselComp from "components/carousel";
import { IconService } from "ui/icons";
import { Caracteristic, Title } from "ui/typography";
import { CaracteristicContainer, Root, ServiceContainer } from "./styled";

export default function CabanaComp({ cabana }: any) {
  return (
    <Root>
      <Title>{cabana.title}</Title>
      <CarouselComp images={cabana.images}></CarouselComp>
      <CaracteristicContainer>
        {cabana?.description?.map((a: any) => {
          return <Caracteristic key={a}>{a}</Caracteristic>;
        })}
      </CaracteristicContainer>
      <ServiceContainer>
        {cabana?.equipment?.map((a: any) => {
          return (
            <IconService
              key={a.description}
              src={a.img}
              body={a.description}
            ></IconService>
          );
        })}
      </ServiceContainer>
    </Root>
  );
}
