import { Subtitle } from "ui/typography";
import { Destacado, Item, Lista, Root, Texto } from "./styled";

export default function HomeHistoria() {
  return (
    <Root>
      <Subtitle color="var(--gray-strong)" align="center">
        UN SUEÑO FAMILIAR QUE CRECIÓ JUNTO A VOS
      </Subtitle>
      <Texto>
        Nuestra historia comenzó en 2001, con apenas un par de cabañas, un
        terreno pequeño en Los Reartes y la ilusión intacta de construir un
        refugio donde las familias pudieran desconectarse, respirar el aire de
        las sierras y sentirse como en casa.
      </Texto>
      <Texto>
        Hoy, más de 25 años después, miramos hacia atrás y nos damos cuenta de
        que no construimos esto solos: Las Princesas creció al ritmo de los
        abrazos, las risas y las historias de cada huésped que nos eligió.
      </Texto>
      <Texto>
        Escuchando lo que cada familia necesitaba para sus vacaciones, fuimos
        transformando el lugar paso a paso:
      </Texto>
      <Lista>
        <Item>
          <Destacado>Ampliamos nuestras miradas:</Destacado> adquirimos nuevos
          terrenos hasta lograr un gran parque verde de 6.000 m², buscando que
          la naturaleza de Córdoba fuera siempre la gran protagonista.
        </Item>
        <Item>
          <Destacado>Sumamos espacios para compartir:</Destacado> creamos el
          Club House para abrigar las tardes de lluvia, diseñamos un quincho con
          horno de barro para las tradicionales reuniones y renovamos
          completamente nuestro espacio de juegos para la alegría de los más
          chicos.
        </Item>
        <Item>
          <Destacado>Pensamos en el descanso de todos:</Destacado> renovamos
          nuestra zona de piletas con jacuzzi y solárium para disfrutar del sol
          serrano, y sumamos desde departamentos con vistas panorámicas hasta
          Cabañas Superiores para recibir a familias cada vez más grandes.
        </Item>
      </Lista>
      <Texto>
        A pesar de los años, de los cambios y del esfuerzo que implicó superar
        momentos difíciles —como reconstruir desde cero nuestro espacio de
        juegos tras un incendio—, el alma de este lugar no cambió.
      </Texto>
      <Texto>
        Las Princesas sigue siendo lo que siempre fue: un emprendimiento de
        familia dedicado a cuidar de la tuya. Gracias por ser parte de nuestra
        historia y por permitirnos ser el escenario de tus mejores recuerdos.
      </Texto>
    </Root>
  );
}
