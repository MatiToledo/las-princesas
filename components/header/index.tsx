import Menu from "components/menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import { Body } from "ui/typography";
import { NavLeft, Root } from "./styled";

export default function Header() {
  const router = useRouter();

  function handleLogo() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <Image
        src={logo}
        width={40}
        height={40}
        onClick={handleLogo}
        alt="logo"
        style={{ cursor: "pointer" }}
      ></Image>
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
