import { UNIDADES } from "lib/negocio";
import { Subtitle } from "ui/typography";
import { Root, Scroller, Tabla } from "./styled";

export default function AlojamientosCapacidad() {
  return (
    <Root>
      <Subtitle color="var(--gray-strong)" align="center">
        CAPACIDAD DE CADA UNIDAD
      </Subtitle>
      <Scroller>
        <Tabla>
          <thead>
            <tr>
              <th scope="col">Tipo de alojamiento</th>
              <th scope="col">Unidades</th>
              <th scope="col">Capacidad base</th>
              <th scope="col">Ideal</th>
            </tr>
          </thead>
          <tbody>
            {UNIDADES.map(({ nombre, cantidad, capacidad, ideal }) => (
              <tr key={nombre}>
                <th scope="row">{nombre}</th>
                <td>{cantidad}</td>
                <td>{capacidad}</td>
                <td>{ideal}</td>
              </tr>
            ))}
          </tbody>
        </Tabla>
      </Scroller>
    </Root>
  );
}
