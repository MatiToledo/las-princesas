import Menu from "components/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Body } from "ui/typography";
import { LogoContainer, NavLeft, Root } from "./styled";
import Logo from "public/Logo.webp";

export default function Header() {
  const router = useRouter();

  function handleLogo() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <LogoContainer>
        <Image
          src={Logo}
          width={40}
          height={40}
          alt="Logo"
          onClick={handleLogo}
          layout="responsive"
        ></Image>
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
      </NavLeft>
    </Root>
  );
}
