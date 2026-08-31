import { ANIO_APERTURA, RESENAS, RESENAS_DESTACADAS } from "lib/negocio";
import Carousel from "nuka-carousel";
import { Next, Prev } from "ui/icons";
import {
  Autor,
  CarouselWrap,
  Estrellas,
  Meta,
  Opinion,
  Root,
  Stat,
  StatLabel,
  StatValue,
  Stats,
  Texto,
} from "./styled";

const ANIOS = new Date().getFullYear() - ANIO_APERTURA;

function Estrella() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2l2.9 6.26 6.6.72-4.9 4.5 1.36 6.52L12 16.7l-5.96 3.3L7.4 13.48 2.5 8.98l6.6-.72L12 2z" />
    </svg>
  );
}

export default function HomeTrust() {
  return (
    <Root>
      <Stats>
        <Stat>
          <StatValue>{RESENAS.tripadvisor.ranking}</StatValue>
          <StatLabel>
            alojamientos especiales en Los Reartes, según Tripadvisor
          </StatLabel>
        </Stat>
        <Stat>
          <StatValue>{RESENAS.google.rating.toLocaleString("es-AR")}</StatValue>
          <StatLabel>
            en Google, sobre {RESENAS.google.cantidad} reseñas
          </StatLabel>
        </Stat>
        <Stat>
          <StatValue>
            {RESENAS.tripadvisor.rating.toLocaleString("es-AR")}
          </StatValue>
          <StatLabel>
            en Tripadvisor, sobre {RESENAS.tripadvisor.cantidad} opiniones
          </StatLabel>
        </Stat>
        <Stat>
          <StatValue>+{ANIOS}</StatValue>
          <StatLabel>años recibiendo familias, desde {ANIO_APERTURA}</StatLabel>
        </Stat>
      </Stats>

      <CarouselWrap>
        <Carousel
          wrapAround={true}
          autoplay={true}
          autoplayInterval={9000}
          pauseOnHover={true}
          speed={600}
          renderCenterLeftControls={({ previousSlide }) => (
            <Prev onClick={previousSlide} aria-label="Opinión anterior">
              Anterior
            </Prev>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Next onClick={nextSlide} aria-label="Opinión siguiente">
              Siguiente
            </Next>
          )}
          defaultControlsConfig={{
            pagingDotsStyle: { fill: "var(--gray-weak)" },
          }}>
          {RESENAS_DESTACADAS.map(({ texto, autor, fecha, estrellas }) => (
            <Opinion key={autor}>
              <Estrellas
                role="img"
                aria-label={`${estrellas} de 5 estrellas`}>
                {Array.from({ length: estrellas }, (_, i) => (
                  <Estrella key={i} />
                ))}
              </Estrellas>
              <Texto>{texto}</Texto>
              <Autor>
                {autor}
                <Meta>Google · {fecha}</Meta>
              </Autor>
            </Opinion>
          ))}
        </Carousel>
      </CarouselWrap>
    </Root>
  );
}
