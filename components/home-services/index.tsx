import { CardHome } from "ui/cards";
import { Header, Root, ServiceContainer } from "./styled";
import alojamiento from "public/alojamiento.png";
import relax from "public/relax.jpeg";
import esparcimiento from "public/esparcimiento.jpeg";
import desayuno from "public/desayuno.png";
import limpieza from "public/limpieza.png";
import wifi from "public/wifi.png";
import espacios from "public/espacios.png";
import juegos from "public/juegos.png";
import quincho from "public/quincho.png";
import { Body, Title } from "ui/typography";
import { IconService } from "ui/icons";

export default function HomeServices() {
  return (
    <Root>
      <Header>
        <Title>
          TU LUGAR IDEAL PARA DESCANSAR Y DISFRUTAR DE LA NATURALEZA
        </Title>
        <Body>
          Contamos con 7 cabañas y 4 aparts sumamente confortables y totalmente
          equipados, pensados para tu bienestar y el de todos nuestros
          huéspedes, rodeados de un amplio parque con espacios comunes y un
          bello entorno natural.
        </Body>
      </Header>
      <CardHome
        title="ALOJAMIENTO"
        src={alojamiento}
        body="Ofrecemos servicio de alojamiento en cabañas y habitaciones totalmente equipadas y amobladas con cálidos detalles de decoración."
      ></CardHome>
      <CardHome
        title="RELAX"
        src={relax}
        body="Ofrecemos espacios de relax en nuestro parque, zona de pileta y solárium que te permitirán tomar sol, escuchar música o simplemente descansar."
      ></CardHome>
      <CardHome
        title="ESPARCIMIENTO"
        src={esparcimiento}
        body="Ofrecemos oportunidad para el disfrute y contacto con la naturaleza en espacios de entretenimiento y juego al aire libre y en nuestro Club House."
      ></CardHome>
      <ServiceContainer>
        <IconService
          src={desayuno}
          body="Desayuno seco/ Panificacion en la cabaña"
        ></IconService>
        <IconService
          src={limpieza}
          body="Servicio de limpieza + Ropa de  blanco"
        ></IconService>
        <IconService
          src={wifi}
          body="WIFI. Repetidoras en el complejo."
        ></IconService>
        <IconService
          src={espacios}
          body="Espacios comunes para estar"
        ></IconService>
        <IconService
          src={juegos}
          body="Lugares de juego para grandes y chicos"
        ></IconService>
        <IconService
          src={quincho}
          body="Quincho con asador, disco y horno de barro"
        ></IconService>
      </ServiceContainer>
    </Root>
  );
}
