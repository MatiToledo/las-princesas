import { ButtonPrimary } from "ui/buttons";
import { Contact } from "ui/icons";
import { TextArea, TextField } from "ui/inputs";
import { Subtitle } from "ui/typography";
import { Content, FormContainer, Root } from "./styled";

export default function ContactForm() {
  return (
    <Root>
      <Subtitle weight="700" color="var(--white)">
        Consultános
      </Subtitle>
      <Content>
        <Contact></Contact>
        <FormContainer>
          <form>
            <TextField
              label="Nombre"
              placeholder="Ingrese su nombre"
            ></TextField>
            <TextField label="Email" placeholder="Ingrese su mail"></TextField>
            <TextArea
              label="Email"
              placeholder="Detalle fecha y cantidad de pasajeros (mayores y niños)"
            ></TextArea>
            <ButtonPrimary>ENVIAR</ButtonPrimary>
          </form>
        </FormContainer>
      </Content>
    </Root>
  );
}
