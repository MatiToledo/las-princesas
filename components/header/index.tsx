import Menu from "components/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Body } from "ui/typography";
import { LogoContainer, NavLeft, Root } from "./styled";
import logo from "public/logo-header.webp";

export default function Header() {
  const router = useRouter();

  function handleLogo() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <LogoContainer>
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Logo"
          onClick={handleLogo}
          layout="responsive"></Image>
      </LogoContainer>
      <Menu></Menu>
      <NavLeft>
        <Link href={"/alojamientos"}>
          <Body>CABAÑAS Y APART</Body>
        </Link>
        <Link href={"/servicios"}>
          <Body>SERVICIOS</Body>
        </Link>
        <Link href={"/ubicacion"}>
          <Body>UBICACION-CONTACTO</Body>
        </Link>
        <Link href={"/complejo"}>
          <Body>PARQUE</Body>
        </Link>
        <a
          href={
            "https://www.alquilerargentina.com/alojamientos/uj56-Complejo-Las-Princesas-Caba%C3%B1as-Frente-al-Rio-Los-Reartes.html"
          }
          rel="noopener noreferrer"
          target="_blank">
          <Body>RESERVAR</Body>
        </a>
      </NavLeft>
    </Root>
  );
}
