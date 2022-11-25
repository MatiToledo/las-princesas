import { sweetAlert } from "lib/alert";
import { sendEmailApi } from "lib/api";
import moment from "moment";
import { useForm } from "react-hook-form";
import { ButtonSecondary } from "ui/buttons";
import { Input, Label, Textarea } from "ui/inputs";
import { Subtitle } from "ui/typography";
import { Content, FormContainer, Info, Root, Row } from "./styled";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function handleForm(data: any) {
    data.until = moment(data.until).format("DD-MM-YYYY");
    data.from = moment(data.from).format("DD-MM-YYYY");

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
            <Info>
              <Row>
                <span>
                  <Label>
                    Desde
                    <Input
                      type="date"
                      {...register("from", { required: true })}
                    ></Input>
                  </Label>
                </span>
                <span>
                  <Label>
                    Hasta
                    <Input
                      type="date"
                      {...register("until", { required: true })}
                    ></Input>
                  </Label>
                </span>
              </Row>
              <Row>
                <span>
                  <Label>
                    Adultos
                    <Input
                      type="number"
                      {...register("adults", { required: true })}
                    ></Input>
                  </Label>
                </span>
                <span>
                  <Label>
                    Menores
                    <Input
                      type="number"
                      {...register("kids", { required: true })}
                    ></Input>
                  </Label>
                </span>
              </Row>
            </Info>
            <span>
              <Label>Información adicional</Label>
              <Textarea
                placeholder="Ingrese su mensaje"
                {...register("message", { required: true })}
              ></Textarea>
            </span>
            <ButtonSecondary>ENVIAR</ButtonSecondary>
          </form>
        </FormContainer>
      </Content>
    </Root>
  );
}
