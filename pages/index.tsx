import ContactForm from "components/contact-form";
import Footer from "components/footer";
import HomeFaq from "components/home-faq";
import HomeHistoria from "components/home-historia";
import HomeLlegar from "components/home-llegar";
import HomeMain from "components/home-main";
import HomeRedirects from "components/home-redirects";
import HomeServices from "components/home-services";
import HomeTrust from "components/home-trust";
import Seo, { SITE_URL } from "components/seo";
import { AMENITIES_SCHEMA, FAQ, RESENAS } from "lib/negocio";
import Head from "next/head";
import Header from "../components/header";

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cabañas Las Princesas",
  description:
    "Complejo de 7 cabañas y 4 aparts frente al río en Los Reartes, Valle de Calamuchita, Córdoba. Emprendimiento familiar desde 2001.",
  url: SITE_URL,
  image: `${SITE_URL}/home.webp`,
  telephone: "+54 9 351 564 2035",
  email: "lasprincesascabanasfrentealrio@gmail.com",
  foundingDate: "2001",
  checkinTime: "14:00",
  checkoutTime: "10:00",
  petsAllowed:
    "Se aceptan mascotas según ocupación y disponibilidad. En enero y febrero no es posible.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Reartes",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.926606,
    longitude: -64.595783,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RESENAS.google.rating,
    reviewCount: RESENAS.google.cantidad,
    bestRating: 5,
  },
  amenityFeature: AMENITIES_SCHEMA.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  sameAs: [
    "https://www.instagram.com/lasprincesas.cabanas/",
    "https://www.facebook.com/lasprincesas.cabanas/",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ pregunta, respuesta }) => ({
    "@type": "Question",
    name: pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: respuesta,
    },
  })),
};

export default function Home() {
  return (
    <div>
      <Seo
        title="Cabañas Las Princesas – Los Reartes, Frente al Río"
        description="Cabañas y aparts frente al río en Los Reartes, con pileta climatizada, jacuzzi y quincho. A 7 km de Villa Gral. Belgrano. Consultá disponibilidad."
        path="/"
        jsonLd={[lodgingJsonLd, faqJsonLd]}
      />
      <Head>
        <meta
          name="keywords"
          content="Cabañas,Las Princesas,Cabañas Las Princesas,Cabañas Los Reartes,Los Reartes,Frente al rio,Apart,Club House,Pileta,Quincho Juegos,Quincho Comida"
        ></meta>
        <meta
          name="google-site-verification"
          content="Q1DlyalI2pF1k_SOXqJW6dyZFKrw2azXOG7YbyzdwEA"
        />
      </Head>
      <Header></Header>
      <HomeMain></HomeMain>
      <HomeServices></HomeServices>
      <HomeTrust></HomeTrust>
      <HomeLlegar></HomeLlegar>
      <HomeHistoria></HomeHistoria>
      <HomeRedirects></HomeRedirects>
      <HomeFaq></HomeFaq>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
