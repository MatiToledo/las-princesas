import { useAlojamientos } from "hooks";
import { CardAlojamiento } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Container, ContainerDesktop, Root } from "./styled";

export default function AlojamientosComp() {
  const alojamientos = useAlojamientos();
  const sort = alojamientos
    ?.sort((a: any, b: any) => a.order < b.order)
    .reverse();

  const aparts = sort?.slice(0, alojamientos.length / 2);
  const cabanas = sort?.slice(alojamientos.length / 2);

  return (
    <Root>
      <Title>
        Encuentra en nuestras unidades el equilibro perfecto entre relax y
        confort. Veni a conocernos!
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
                path={a.path}></CardAlojamiento>
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
                path={a.path}></CardAlojamiento>
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
                path={a.path}></CardAlojamiento>
            );
          })}
        </ContainerDesktop>
      </CardsContainer>
    </Root>
  );
}
