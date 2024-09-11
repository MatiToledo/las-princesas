import HousingComp from "components/alojamientos";
import Footer from "components/footer";
import Header from "components/header";
import Head from "next/head";

export default function HousingsPage() {
  return (
    <div>
      <Head>
        <title>Las Princesas | Alojamientos</title>
      </Head>
      <Header />
      <HousingComp />
      <Footer />
    </div>
  );
}
