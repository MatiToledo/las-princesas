import { CardHome } from "ui/cards";
import { CardsHomeContainer, Header, Root, ServiceContainer } from "./styled";
import { Body, Title } from "ui/typography";
import { IconService } from "ui/icons";

export default function HomeServices() {
  const cards = [
    {
      title: "ALOJAMIENTO",
      src: "alojamiento.webp",
      body: "Ofrecemos servicio de alojamiento en cabañas y habitaciones totalmente equipadas y amobladas con cálidos detalles de decoración.",
    },
    {
      title: "RELAX",
      src: "relax.webp",
      body: "Ofrecemos espacios de relax en nuestro parque, zona de pileta y solárium que te permitirán tomar sol, escuchar cómo o simplemente descansar.",
    },
    {
      title: "ESPARCIMIENTO",
      src: "esparcimiento.webp",
      body: "Ofrecemos espacios de relax en nuestro parque, zona de pileta y solárium que te permitirán tomar sol, escuchar qué o simplemente descansar.",
    },
  ];

  const services = [
    {
      src: "desayuno.webp",
      body: "Desayuno seco / Panificacion en la cabaña",
    },
    {
      src: "limpieza.webp",
      body: "Servicio de limpieza + Ropa de blanco",
    },
    {
      src: "wifi.webp",
      body: "WIFI (fibra óptica). Repetidores en el complejo",
    },
    {
      src: "espacios.webp",
      body: "Espacios comunes para estar",
    },
    {
      src: "juegos.webp",
      body: "Lugares de juego para grandes y chicos",
    },
    {
      src: "quincho.webp",
      body: "Quincho con asador, disco y horno de barro",
    },
  ];

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
      <CardsHomeContainer>
        {cards.map((card, index) => (
          <CardHome
            key={index}
            title={card.title}
            src={`/home/services/${card.src}`}
            body={card.body}></CardHome>
        ))}
      </CardsHomeContainer>
      <ServiceContainer>
        {services.map((service, index) => (
          <IconService
            key={index}
            src={`/home/services/${service.src}`}
            body={service.body}></IconService>
        ))}
      </ServiceContainer>
    </Root>
  );
}
