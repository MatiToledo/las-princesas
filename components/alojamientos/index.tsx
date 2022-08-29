import { useAlojamientos } from "hooks";
import { CardAlojamiento } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Container, ContainerDesktop, Root } from "./styled";

export default function AlojamientosComp() {
  const alojamientos = useAlojamientos();
  const sort = alojamientos
    ?.sort((a: any, b: any) => a.order < b.order)
    .reverse();

  const cabanas = sort?.slice(0, alojamientos.length / 2);
  const aparts = sort?.slice(alojamientos.length / 2);

  return (
    <Root>
      <Title>
        Encuentra entre nuestras unidades la que mejor se adapte a ti y hazlo
        realidad{" "}
      </Title>
      <CardsContainer>
        <Container>
          {sort?.map((a: any) => {
            return (
              <CardAlojamiento
                key={a.key}
                title={a.title}
                src={a.img}
                description={a.description}
                path={a.path}
              ></CardAlojamiento>
            );
          })}
        </Container>
        <ContainerDesktop>
          {aparts?.map((a: any) => {
            return (
              <CardAlojamiento
                key={a.key}
                title={a.title}
                src={a.img}
                description={a.description}
                path={a.path}
              ></CardAlojamiento>
            );
          })}
        </ContainerDesktop>
        <ContainerDesktop>
          {cabanas?.map((a: any) => {
            return (
              <CardAlojamiento
                key={a.key}
                title={a.title}
                src={a.img}
                description={a.description}
                path={a.path}
              ></CardAlojamiento>
            );
          })}
        </ContainerDesktop>
      </CardsContainer>
    </Root>
  );
}
