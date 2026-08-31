import ContactForm from "components/contact-form";
import Footer from "components/footer";
import Header from "components/header";
import Ubication from "components/ubication";
import Seo from "components/seo";

export default function UbicationPage() {
  return (
    <div>
      <Seo
        title="Ubicación y Contacto – Cabañas Las Princesas, Los Reartes"
        description="Estamos frente al río en Los Reartes, Valle de Calamuchita, a 7 km de Villa General Belgrano. Consultanos por disponibilidad y reservas."
        path="/ubicacion"
      />
      <Header></Header>
      <Ubication></Ubication>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
