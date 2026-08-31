import CloudBeds from "components/cloudbeds";
import Footer from "components/footer";
import Header from "components/header";
import ServiciosComp from "components/servicios";
import Seo from "components/seo";

export default function ReservarPage() {
  return (
    <div>
      <Seo
        title="Reservar – Cabañas Las Princesas, Los Reartes"
        description="Consultá disponibilidad y reservá tu estadía en Cabañas Las Princesas, frente al río en Los Reartes, Valle de Calamuchita."
        path="/reservar"
      />
      <Header></Header>
      <CloudBeds></CloudBeds>
      <Footer></Footer>
    </div>
  );
}
