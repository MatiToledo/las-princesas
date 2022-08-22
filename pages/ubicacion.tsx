import ContactForm from "components/contact-form";
import Footer from "components/footer";
import Header from "components/header";
import Ubication from "components/ubication";
import { Body, Title } from "ui/typography";

export default function UbicationPage() {
  return (
    <div>
      <Header></Header>
      <Ubication></Ubication>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
