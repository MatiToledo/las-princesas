import Menu from "components/menu";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import { Root } from "./styled";

export default function Header() {
  const router = useRouter();

  function handleLogo() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <Image src={logo} width={40} height={40} onClick={handleLogo}></Image>
      <Menu></Menu>
    </Root>
  );
}
