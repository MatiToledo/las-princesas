import { Content, MapContainer, Root } from "./styled";
import { Body, Title } from "ui/typography";
import ubic1 from "public/ubic-1.webp";
import ubic2 from "public/ubic-2.webp";
import ubic3 from "public/ubic-3.webp";
import ubic4 from "public/ubic-4.webp";
import ubic5 from "public/ubic-5.webp";
import Carousel from "components/carousel";

const images = [ubic1, ubic2, ubic3, ubic4, ubic5];

const LAT = -31.926606;
const LNG = -64.595783;
const MAP_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`;

export default function Ubication() {
  return (
    <Root>
      <Title>CAPILLA VIEJA, LOS REARTES / Valle de Calamuchita, Cordoba</Title>
      <Body>
        Nos encontramos frente al río Los Reartes, un lugar privilegiado por su
        entorno natural, sus hermosas vistas al paisaje serrano y su cercanía a
        los principales atractivos de la zona.{" "}
      </Body>
      <Content>
        <MapContainer
          src={MAP_SRC}
          title="Ubicación de Cabañas Las Princesas en Los Reartes, Córdoba"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <Carousel
          images={images}
          alt="El entorno de Cabañas Las Princesas, frente al río Los Reartes"></Carousel>
      </Content>
    </Root>
  );
}
