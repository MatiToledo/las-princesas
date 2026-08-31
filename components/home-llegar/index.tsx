import { COMO_LLEGAR, DISTANCIAS } from "lib/negocio";
import { Subtitle } from "ui/typography";
import {
  Col,
  ColTitle,
  Distancia,
  Distancias,
  Grid,
  Km,
  Root,
  Step,
  Steps,
} from "./styled";

export default function HomeLlegar() {
  return (
    <Root>
      <Subtitle color="var(--gray-strong)" align="center">
        CÓMO LLEGAR
      </Subtitle>
      <Grid>
        <Col>
          <ColTitle>El camino, paso a paso</ColTitle>
          <Steps>
            {COMO_LLEGAR.map((paso) => (
              <Step key={paso}>{paso}</Step>
            ))}
          </Steps>
        </Col>
        <Col>
          <ColTitle>Qué tenés cerca</ColTitle>
          <Distancias>
            {DISTANCIAS.map(({ lugar, km }) => (
              <Distancia key={lugar}>
                <span>{lugar}</span>
                <Km>{km} km</Km>
              </Distancia>
            ))}
          </Distancias>
        </Col>
      </Grid>
    </Root>
  );
}
