import { useAlojamientos } from "hooks";
import { CardAlojamiento } from "ui/cards";
import { Title } from "ui/typography";
import { Banner, CardsContainer, Root } from "./styled";

export default function AlojamientosComp() {
  const alojamientos = useAlojamientos();
  return (
    <Root>
      <Title>
        Encuentra entre nuestras unidades la que mejor se adapte a ti y hazlo
        realidad{" "}
      </Title>
      <CardsContainer>
        {alojamientos?.map((a: any) => {
          return (
            <CardAlojamiento
              key={a.key}
              title={a.title}
              src={a.img}
              description={a.description}
            ></CardAlojamiento>
          );
        })}
      </CardsContainer>
    </Root>
  );
}
