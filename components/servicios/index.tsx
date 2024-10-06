import { useServicios } from "hooks";
import { CardService } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Root } from "./styled";

export default function ServiciosComp() {
  const servicios = useServicios();
  const sort = servicios?.sort((a: any, b: any) => a.order - b.order);

  return (
    <Root>
      <Title>Servicios, relax y diversion. Vive la experiencia completa</Title>
      <CardsContainer>
        {sort?.map((a: any) => {
          return (
            <CardService
              key={a.key}
              title={a.title}
              src={a.img}
              description={a.description}></CardService>
          );
        })}
      </CardsContainer>
    </Root>
  );
}
