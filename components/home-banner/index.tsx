import { useRouter } from "next/router";
import { ButtonPrimary } from "ui/buttons";
import { BannerHeading, Box, BoxButton, Root } from "./styled";

export default function HomeBanner({ type, path }: any) {
  const router = useRouter();
  function handleClick() {
    router.push({ pathname: `/${path}` });
  }

  return (
    <Root
      left={type == "pileta" ? "5%" : ""}
      right={type == "pileta" ? "" : "5%"}
    >
      <Box>
        <BannerHeading align="left">
          {type == "pileta"
            ? "ESE LUGAR QUE BUSCAS ..."
            : "Sentí la magia de las sierras desde un lugar privilegiado..."}
        </BannerHeading>
      </Box>
      <BoxButton>
        <ButtonPrimary onClick={handleClick}>
          {type == "pileta" ? "SERVICIOS" : "ALOJAMIENTOS"}
        </ButtonPrimary>
      </BoxButton>
    </Root>
  );
}
