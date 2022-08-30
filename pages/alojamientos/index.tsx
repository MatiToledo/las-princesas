import AlojamientosComp from "components/alojamientos";
import Footer from "components/footer";
import Header from "components/header";
import Head from "next/head";

export default function AlojamientosPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Alojamientos</title>
      </Head>
      <Header></Header>
      <AlojamientosComp></AlojamientosComp>
      <Footer></Footer>
    </div>
  );
}
