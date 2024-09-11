import ContactForm from "components/contact-form";
import Footer from "components/footer";
import HomeMain from "components/home/main";
import HomeRedirects from "components/home/redirects";
import HomeServices from "components/home/services";
import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Las Princesas</title>
        <meta name="title" content="Cabañas Las Princesas"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="Complejo de Cabañas Las Princesas ubicado frente al rio en Los Reartes, Capilla Vieja"></meta>
        <meta
          name="keywords"
          content="Cabañas,Las Princesas,Cabañas Las Princesas,Cabañas Los Reartes,Los Reartes,Frente al rio,Apart,Club House,Pileta,Quincho Juegos,Quincho Comida"></meta>
        <meta httpEquiv="languaje" content="es"></meta>
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="Q1DlyalI2pF1k_SOXqJW6dyZFKrw2azXOG7YbyzdwEA"
        />
      </Head>
      <Header></Header>
      <HomeMain></HomeMain>
      <HomeServices></HomeServices>
      <HomeRedirects></HomeRedirects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
