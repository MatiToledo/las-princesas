import Menu from "components/menu";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import { Body, Large } from "ui/typography";
import { NavLeft, Root } from "./styled";

export default function Header() {
  const router = useRouter();

  function handleLogo() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <Image src={logo} width={40} height={40} onClick={handleLogo}></Image>
      <Menu></Menu>
      <NavLeft>
        <Body>CABAÑAS Y APART</Body>
        <Body>SERVICIOS</Body>
        <Body>UBICACION-CONTACTO</Body>
        <Body>PARQUE</Body>
      </NavLeft>
    </Root>
  );
}
