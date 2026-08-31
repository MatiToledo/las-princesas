import { FAQ } from "lib/negocio";
import { Subtitle } from "ui/typography";
import { Answer, Item, List, Question, Root } from "./styled";

export default function HomeFaq() {
  return (
    <Root>
      <Subtitle color="var(--gray-strong)" align="center">
        PREGUNTAS FRECUENTES
      </Subtitle>
      <List>
        {FAQ.map(({ pregunta, respuesta }) => (
          <Item key={pregunta}>
            <Question>{pregunta}</Question>
            <Answer>{respuesta}</Answer>
          </Item>
        ))}
      </List>
    </Root>
  );
}
