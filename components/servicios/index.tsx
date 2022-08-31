import { useServicios } from "hooks";
import { CardService } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Root } from "./styled";

export default function ServiciosComp() {
  const servicios = useServicios();
  const sort = servicios?.sort((a: any, b: any) => a.order > b.order).reverse();

  return (
    <Root>
      <Title>
        Encuentra entre nuestros servicios el mejor para tu estadía y hazlo
        realidad
      </Title>
      <CardsContainer>
        {sort?.map((a: any) => {
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
