import { ButtonPrimary } from "ui/buttons";
import { Input, TextArea, TextField } from "ui/inputs";
import { Root } from "./styled";
import ReactWhatsapp from "react-whatsapp";
import { Whatsapp } from "ui/icons";

export default function ContactForm() {
  return (
    <Root>
      <TextField label="Nombre" placeholder="Ingrese su nombre"></TextField>
      <TextField label="Email" placeholder="Ingrese su mail"></TextField>
      <TextArea
        label="Email"
        placeholder="Detalle fecha y cantidad de pasajeros (mayores y niños)"
      ></TextArea>
      <ButtonPrimary>ENVIAR</ButtonPrimary>
      <ReactWhatsapp number="+54 9 351 564 2035" message="Hola!" element="div">
        <Whatsapp></Whatsapp>
      </ReactWhatsapp>
    </Root>
  );
}
