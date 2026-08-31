import { Subtitle } from "ui/typography";
import { Root, Texto } from "./styled";

export default function HomeHistoria() {
  return (
    <Root>
      <Subtitle color="var(--gray-strong)" align="center">
        MÁS DE 25 AÑOS CRECIENDO EN FAMILIA
      </Subtitle>
      <Texto>
        Las Princesas nació en 2001 como un pequeño emprendimiento familiar en
        Los Reartes. Empezamos con dos unidades en un predio de 600 m², con la
        idea de crear un lugar donde se pudiera disfrutar de la tranquilidad de
        las sierras.
      </Texto>
      <Texto>
        Cada espacio que fuimos sumando nació de algo que nos transmitieron
        nuestros huéspedes. Así aparecieron el sector de juegos, el Club House
        para los días de lluvia, y el quincho de comidas con sus asadores y el
        horno de barro. Hoy el parque tiene 6.000 m², la pileta llegó a los 100
        m² de espejo de agua y las últimas en llegar fueron las Cabañas
        Superiores, más amplias, para familias y grupos.
      </Texto>
      <Texto>
        De aquellas dos primeras cabañas al complejo que somos hoy, hay una idea
        que no cambió: un lugar donde descansar, disfrutar de la naturaleza y
        sentirse como en casa.
      </Texto>
    </Root>
  );
}
