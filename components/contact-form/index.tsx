import { ButtonPrimary } from "ui/buttons";
import { Input, TextArea, TextField } from "ui/inputs";
import { FormContainer, Header, Root } from "./styled";
import { Whatsapp } from "ui/icons";
import { Large, Subtitle } from "ui/typography";

export default function ContactForm() {
  return (
    <Root>
      <Subtitle weight="700" color="var(--white)">
        Consultános
      </Subtitle>
      <form>
        <FormContainer>
          <TextField label="Nombre" placeholder="Ingrese su nombre"></TextField>
          <TextField label="Email" placeholder="Ingrese su mail"></TextField>
          <TextArea
            label="Email"
            placeholder="Detalle fecha y cantidad de pasajeros (mayores y niños)"
          ></TextArea>
          <ButtonPrimary>ENVIAR</ButtonPrimary>
        </FormContainer>
      </form>
    </Root>
  );
}
