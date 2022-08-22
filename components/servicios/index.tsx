import { useServicios } from "hooks";
import { CardService } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Root } from "./styled";

export default function ServiciosComp() {
  const servicios = useServicios();
  console.log(servicios);

  return (
    <Root>
      <Title>
        Encuentra entre nuestros servicios el mejor para tu estadía y hazlo
        realidad
      </Title>
      <CardsContainer>
        {servicios?.map((a: any) => {
          return (
            <CardService
              key={a.key}
              title={a.title}
              src={a.img}
              description={a.description}
            ></CardService>
          );
        })}
      </CardsContainer>
    </Root>
  );
}
