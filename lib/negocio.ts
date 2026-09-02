/**
 * Datos del negocio. Fuente única para el contenido visible y para el JSON-LD.
 *
 * Importante: el schema y lo que se ve en la página tienen que decir lo mismo.
 * Si cambia un dato acá, cambia en los dos lados a la vez.
 *
 * Relevado con el dueño el 2026-08-31 — ver `datos-negocio.md`.
 */

export const RESENAS = {
  google: { rating: 4.6, cantidad: 593 },
  tripadvisor: { rating: 4.6, cantidad: 142, ranking: "N.º 1 de 47" },
};

export const ANIO_APERTURA = 2001;

/**
 * Reseñas reales de Google, transcriptas textualmente.
 * Se muestran con nombre de pila e inicial. Para rotarlas, editar acá.
 */
export const RESENAS_DESTACADAS = [
  {
    texto:
      "Pasamos unos días espectaculares. El alojamiento está frente al río y superó nuestras expectativas. La atención fue cálida y siempre disponible. Todo ordenado, limpio y de muy buen gusto. ¡Volveremos!",
    autor: "Hebe G.",
    fecha: "julio de 2026",
    estrellas: 5,
  },
  {
    texto:
      "Es el segundo año que volvemos a estas cabañas y la verdad que el lugar es perfecto para una escapada. Muy lindo, tranquilo y con un entorno precioso. Disfrutamos muchísimo la estadía y seguro volveremos para el verano.",
    autor: "Lara S.",
    fecha: "julio de 2026",
    estrellas: 5,
  },
  {
    texto:
      "Recomiendo el complejo por su ubicación frente al río, muy práctica para ir con niños pequeños. El lugar está impecable, muy bien mantenidos los espacios comunes, juegos, verde, pileta. El lugar es muy tranquilo y el ambiente familiar. La atención muy buena.",
    autor: "Mariángeles F.",
    fecha: "febrero de 2026",
    estrellas: 5,
  },
];

export const DISTANCIAS = [
  { lugar: "Pueblo de Los Reartes", km: 2 },
  { lugar: "Villa General Belgrano", km: 7 },
  { lugar: "Lago Los Molinos", km: 20 },
  { lugar: "La Cumbrecita", km: 30 },
];

export const COMO_LLEGAR = [
  "Tomás la autopista hasta Villa Ciudad de América.",
  "Seguís por ruta hasta el Puente San Ignacio de Loyola, sobre el Río Los Reartes.",
  "Desde el puente son 1.800 metros por la costanera del río, camino de tierra consolidada y transitable, con vistas a las sierras.",
];

export const UNIDADES = [
  {
    nombre: "Apart planta baja",
    cantidad: 2,
    capacidad: "2 a 3 pasajeros",
    ideal: "para familia con un bebé o niño pequeño",
  },
  {
    nombre: "Apart planta alta",
    cantidad: 2,
    capacidad: "2 pasajeros",
    ideal: "para parejas",
  },
  {
    nombre: "Cabaña 1 dormitorio",
    cantidad: 2,
    capacidad: "2 a 4 pasajeros",
    ideal: "para familia tipo con 1 o 2 niños",
  },
  {
    nombre: "Cabaña 2 dormitorios",
    cantidad: 2,
    capacidad: "4 pasajeros",
    ideal: "para familias medianas o grupos de amigos",
  },
  {
    nombre: "Cabaña 2 dormitorios independiente",
    cantidad: 1,
    capacidad: "5 pasajeros",
    ideal: "para familias o grupos reducidos",
  },
  {
    nombre: "Cabañas superiores",
    cantidad: 2,
    capacidad: "6 a 8 pasajeros",
    ideal: "para familias numerosas o grupos grandes",
  },
];

/**
 * Las respuestas se usan tal cual en el schema FAQPage, así que tienen que
 * poder leerse solas, fuera del contexto de la página.
 */
export const FAQ = [
  {
    pregunta: "¿Aceptan mascotas?",
    respuesta:
      "Sí, aceptamos mascotas según la ocupación y las unidades disponibles. En temporada alta (enero y febrero) no es posible. Consultanos antes de reservar y te confirmamos.",
  },
  {
    pregunta: "¿Cuál es el horario de check-in y check-out?",
    respuesta:
      "El check-in es a partir de las 14 hs y el check-out hasta las 10 hs. Si lo necesitás, ofrecemos late check-out con costo adicional, sujeto a disponibilidad.",
  },
  {
    pregunta: "¿El desayuno está incluido?",
    respuesta:
      "Sí, todas las mañanas vas a disfrutar de nuestro desayuno. Dejamos a tu disposición en la cabaña infusiones de todo tipo, leche, dulce/untables y un jugo de naranja de bienvenida. Cada día por la mañana te acercamos productos de panadería frescos para que desayunes con total tranquilidad y a tu propio ritmo.",
  },
  {
    pregunta: "¿La pileta está climatizada?",
    respuesta:
      "Disponemos de una pileta principal al aire libre, climatizada por energía solar de noviembre a marzo, pileta para los más chicos, solárium húmedo y jacuzzi al aire libre.",
  },
  {
    pregunta: "¿Cómo se llega al complejo? ¿El camino es de tierra?",
    respuesta:
      "Se accede por autovía hasta Villa Ciudad de América y luego por ruta hasta el Puente San Ignacio de Loyola. Desde el puente, son 1.800 metros por la costanera del río por un camino de tierra consolidada, tranquilo y transitable.",
  },
  {
    pregunta: "¿Cuál es la política de cancelación?",
    respuesta:
      "Las cancelaciones o modificaciones realizadas con 20 días o más de anticipación a la fecha de ingreso mantendrán la seña a favor del cliente para ser reutilizada en temporada baja (sujeto a disponibilidad del complejo). En cancelaciones con menos de 20 días de aviso, no presentación (no show) o salidas anticipadas, la seña no será reembolsable ni acreditable. La reserva podrá ser transferida a un tercero respetando las fechas originales e informando previamente a la administración.",
  },
  {
    pregunta: "¿Hay cocheras cubiertas?",
    respuesta:
      "Todas las unidades cuentan con espacio de estacionamiento protegido. Disponemos de cocheras cubiertas individuales en algunas cabañas o una cochera común techada y amplia, así como cocheras semicubiertas adicionales para brindar la mayor comodidad a nuestros huéspedes.",
  },
  {
    pregunta: "¿Cómo es el WiFi?",
    respuesta:
      "Cada unidad tiene su propio router de WiFi por fibra óptica, con repetidores en el complejo.",
  },
];

export const AMENITIES_SCHEMA = [
  "Pileta de 100 m² climatizada por energía solar",
  "Pileta para niños",
  "Jacuzzi exterior con sesión diaria incluida",
  "Solárium en deck con camastros y reposeras",
  "Quincho con horno de barro y dos asadores",
  "Quincho recreativo con ping-pong, metegol y pool",
  "Club House con hogar a leña y juegos de mesa",
  "Juegos de madera para niños",
  "WiFi por fibra óptica con router por unidad",
  "Desayuno incluido",
  "Estacionamiento protegido: cocheras cubiertas y semicubiertas",
  "Aire acondicionado frío/calor",
  "Se aceptan mascotas (según disponibilidad)",
];
