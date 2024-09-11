import ContactForm from "components/contact-form";
import Footer from "components/footer";
import Header from "components/header";
import Location from "components/location";
import Head from "next/head";

export default function LocationPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Ubicación</title>
      </Head>
      <Header></Header>
      <Location></Location>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
