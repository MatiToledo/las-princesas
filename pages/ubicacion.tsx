import ContactForm from "components/contact-form";
import Footer from "components/footer";
import Header from "components/header";
import Ubication from "components/ubication";
import Head from "next/head";

export default function UbicationPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Ubicación</title>
      </Head>
      <Header></Header>
      <Ubication></Ubication>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
