import ContactForm from "components/contact-form";
import HomeRedirects from "components/home-redirects";
import HomeServices from "components/home-services";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HomeServices></HomeServices>
      <HomeRedirects></HomeRedirects>
      <ContactForm></ContactForm>
    </div>
  );
}
