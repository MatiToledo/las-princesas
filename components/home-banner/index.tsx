import { ButtonPrimary } from "ui/buttons";
import { Title } from "ui/typography";
import { Box, BoxButton, Root } from "./styled";

export default function HomeBanner({ type }: any) {
  return (
    <Root align={type == "pileta" ? "5%" : "50%"}>
      <Box>
        <Title align="left">
          {type == "pileta"
            ? "ESE LUGAR QUE BUSCAS ..."
            : "Sentí la magia de las sierras desde un lugar privilegiado..."}
        </Title>
      </Box>
      <BoxButton>
        <ButtonPrimary>
          {type == "pileta" ? "SERVICIOS" : "ALOJAMIENTOS"}
        </ButtonPrimary>
      </BoxButton>
    </Root>
  );
}
