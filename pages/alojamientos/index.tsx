import AlojamientosComp from "components/alojamientos";
import AlojamientosCapacidad from "components/alojamientos-capacidad";
import Footer from "components/footer";
import Header from "components/header";
import Seo from "components/seo";
import { getAlojamientosData } from "controllers/contentful";
import { contentFetcher } from "lib";

export default function AlojamientosPage({ alojamientos }: any) {
  return (
    <div>
      <Seo
        title="Cabañas y Aparts en Los Reartes – Las Princesas"
        description="7 cabañas y 4 aparts totalmente equipados frente al río en Los Reartes. Conocé cada alojamiento, su capacidad y equipamiento."
        path="/alojamientos"
      />
      <Header></Header>
      <AlojamientosComp alojamientos={alojamientos}></AlojamientosComp>
      <AlojamientosCapacidad></AlojamientosCapacidad>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await contentFetcher("alojamientos");
  const alojamientos = getAlojamientosData(res) || null;

  return {
    props: { alojamientos },
    revalidate: 3600,
  };
}
