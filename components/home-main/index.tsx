import { useAlojamientos } from "hooks";
import { ButtonPrimary } from "ui/buttons";
import { Title } from "ui/typography";
import { Box, BoxButton, Root } from "./styled";

export default function HomeMain() {
  const alojamientos = useAlojamientos();

  return (
    <Root>
      <Box>
        <Title align="left">ESE LUGAR QUE BUSCAS ...</Title>
      </Box>
      <BoxButton>
        <ButtonPrimary>CONOCENOS</ButtonPrimary>
      </BoxButton>
    </Root>
  );
}
