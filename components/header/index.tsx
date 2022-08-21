import Image from "next/image";
import logo from "public/logo.png";
import ReactWhatsapp from "react-whatsapp";
import { Burguer } from "ui/icons";
import { Root } from "./styled";

export default function Header() {
  return (
    <Root>
      <Image src={logo} width={40} height={40}></Image>
      <Burguer></Burguer>
    </Root>
  );
}
