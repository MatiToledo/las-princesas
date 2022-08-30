import Footer from "components/footer";
import Header from "components/header";
import ServiciosComp from "components/servicios";
import Head from "next/head";

export default function ServiciosPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Servicios</title>
      </Head>
      <Header></Header>
      <ServiciosComp></ServiciosComp>
      <Footer></Footer>
    </div>
  );
}
