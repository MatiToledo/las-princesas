import { CardAlojamiento } from "ui/cards";
import { Title } from "ui/typography";
import { CardsContainer, Container, ContainerDesktop, Root } from "./styled";

type Housing = {
  title: string;
  description: string;
  path: string;
};

export default function HousingComp() {
  const housings: Housing[] = [
    {
      title: "APART PLANTA ALTA",
      description: "Apart con excelente vista, para parejas. Opción con cuna",
      path: "apart-planta-alta",
    },
    {
      title: "APART PLANTA BAJA",
      description: "Apart con quitchenette sectorizado,  para 2/3 pasajeros.",
      path: "apart-planta-baja",
    },
    {
      title: "CABAÑA 1 DORMITORIO",
      description:
        "Cabaña en una sola planta para 2 a 4 pasajeros. Ideal para familias con niños pequeños.",
      path: "cabana-un-dormitorio",
    },
    {
      title: "CABAÑAS 2 DORMITORIOS",
      description:
        "Cabaña en dos plantas  para 3 a 5 pasajeros.  Se encuentran junto a la pileta.",
      path: "cabana-dos-dormitorios",
    },
    {
      title: "CABAÑA 2 DORMITORIOS INDEPENDIENTE",
      description:
        "Cabaña independiente para 4 a 6  pasajeros. Excelente vista.",
      path: "cabana-dos-dormitorios-independiente",
    },
    {
      title: "CABAÑAS 2 DORMITORIOS 2 BAÑOS COMPLETOS",
      description:
        "Cabaña para 6 a 8 pasajeros.  Apta para 2 familias (2 matrimoniales).",
      path: "cabanas-superiores",
    },
  ];

  const aparts = housings.slice(0, housings.length / 2);
  const cabanas = housings.slice(housings.length / 2);

  return (
    <Root>
      <Title>
        Encuentra en nuestras unidades el equilibro perfecto entre relax y
        confort. Veni a conocernos!
      </Title>
      <CardsContainer>
        <Container>
          {housings?.map((h: Housing, i: number) => {
            return (
              <CardAlojamiento
                key={i}
                title={h.title}
                src={`/housings/${h.path}/index.webp`}
                description={h.description}
                path={h.path}></CardAlojamiento>
            );
          })}
        </Container>
        <ContainerDesktop>
          {aparts?.map((h: Housing, i: number) => {
            return (
              <CardAlojamiento
                key={i}
                title={h.title}
                src={`/housings/${h.path}.webp`}
                description={h.description}
                path={h.path}></CardAlojamiento>
            );
          })}
        </ContainerDesktop>
        <ContainerDesktop>
          {cabanas?.map((h: Housing, i: number) => {
            return (
              <CardAlojamiento
                key={i}
                title={h.title}
                src={`/housings/${h.path}.webp`}
                description={h.description}
                path={h.path}></CardAlojamiento>
            );
          })}
        </ContainerDesktop>
      </CardsContainer>
    </Root>
  );
}
