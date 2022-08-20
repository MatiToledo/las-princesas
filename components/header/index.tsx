import Image from "next/image";
import { Root } from "./styled";
import logo from "public/logo.png";
import { Burguer } from "ui/icons";

export default function Header() {
  return (
    <Root>
      <Image src={logo} width={40} height={40}></Image>
      <Burguer></Burguer>
    </Root>
  );
}
