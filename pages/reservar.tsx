import CloudBeds from "components/cloudbeds";
import Footer from "components/footer";
import Header from "components/header";
import ServiciosComp from "components/servicios";
import Head from "next/head";

export default function ReservarPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Reservar</title>
      </Head>
      <Header></Header>
      <CloudBeds></CloudBeds>
      <Footer></Footer>
    </div>
  );
}
