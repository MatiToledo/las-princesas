import Footer from "components/footer";
import Header from "components/header";
import ServiciosComp from "components/servicios";
import Seo from "components/seo";
import { getServiciosData } from "controllers/contentful";
import { contentFetcher } from "lib";

export default function ServiciosPage({ servicios }: any) {
  return (
    <div>
      <Seo
        title="Servicios – Cabañas Las Princesas, Los Reartes"
        description="Pileta, solárium, quincho con asador y horno de barro, Club House, WIFI de fibra óptica y desayuno en la cabaña. Conocé todos los servicios."
        path="/servicios"
      />
      <Header></Header>
      <ServiciosComp servicios={servicios}></ServiciosComp>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await contentFetcher("servicios");
  const servicios = getServiciosData(res) || null;

  return {
    props: { servicios },
    revalidate: 3600,
  };
}
