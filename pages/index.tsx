import ContactForm from "components/contact-form";
import Footer from "components/footer";
import HomeMain from "components/home-main";
import HomeRedirects from "components/home-redirects";
import HomeServices from "components/home-services";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HomeMain></HomeMain>
      <HomeServices></HomeServices>
      <HomeRedirects></HomeRedirects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
