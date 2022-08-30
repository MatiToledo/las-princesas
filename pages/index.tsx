import ContactForm from "components/contact-form";
import Footer from "components/footer";
import HomeMain from "components/home-main";
import HomeRedirects from "components/home-redirects";
import HomeServices from "components/home-services";
import { contentFetcher } from "lib";
import { contentfulClient } from "lib/contentful";
import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Las Princesas</title>
      </Head>
      <Header></Header>
      <HomeMain></HomeMain>
      <HomeServices></HomeServices>
      <HomeRedirects></HomeRedirects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
