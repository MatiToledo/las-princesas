import { sweetAlert } from "lib/alert";
import { sendEmailApi } from "lib/api";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "ui/buttons";
import { Contact } from "ui/icons";
import { Input, Label, Textarea } from "ui/inputs";
import { Subtitle } from "ui/typography";
import { Content, FormContainer, Root } from "./styled";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function handleForm(data: any) {
    const emailSended = await sendEmailApi(data);

    if (emailSended) {
      sweetAlert("Muchas gracias por su consulta", "success");
      reset();
    } else {
      sweetAlert("Algo salio mal! \n Intentelo de nuevo", "error");
    }
  }

  return (
    <Root>
      <Subtitle weight="700" color="var(--white)">
        Consultános
      </Subtitle>
      <Content>
        <Contact></Contact>
        <FormContainer>
          <form onSubmit={handleSubmit(handleForm)}>
            <span>
              <Label>Nombre</Label>
              <Input
                placeholder="Ingrese su nombre"
                {...register("name", { required: true })}
              ></Input>
            </span>
            <span>
              <Label>Email</Label>
              <Input
                placeholder="Ingrese su email"
                {...register("email", { required: true })}
              ></Input>
            </span>
            <span>
              <Label>Nombre</Label>
              <Textarea
                placeholder="Ingrese su mensaje"
                {...register("message", { required: true })}
              ></Textarea>
            </span>
            <ButtonPrimary>ENVIAR</ButtonPrimary>
          </form>
        </FormContainer>
      </Content>
    </Root>
  );
}
