import { UNIDADES } from "lib/negocio";
import { Subtitle } from "ui/typography";
import { Nota, Root, Scroller, Tabla } from "./styled";

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
              <th scope="col">Unidad</th>
              <th scope="col">Unidades</th>
              <th scope="col">Capacidad base</th>
              <th scope="col">Adicionales</th>
              <th scope="col">Máximo</th>
            </tr>
          </thead>
          <tbody>
            {UNIDADES.map(
              ({ nombre, cantidad, base, adicionales, maximo }) => (
                <tr key={nombre}>
                  <th scope="row">{nombre}</th>
                  <td>{cantidad}</td>
                  <td>{base}</td>
                  <td>{adicionales}</td>
                  <td>{maximo} huéspedes</td>
                </tr>
              )
            )}
          </tbody>
        </Tabla>
      </Scroller>

    </Root>
  );
}
