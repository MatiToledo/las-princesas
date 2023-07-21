import { useRouter } from "next/router";
import { useState } from "react";
import { Burguer } from "ui/icons";
import { Body } from "ui/typography";
import { Dropdown, MenuOption, Root } from "./styled";

export default function Menu() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  function handleBurguer() {
    setActive(!active);
  }
  return (
    <Root>
      <Burguer onClick={handleBurguer}></Burguer>
      {active ? (
        <Dropdown>
          <MenuOption>
            <Body
              align="left"
              onClick={() => {
                router.push({ pathname: "/alojamientos" });
                handleBurguer();
              }}>
              CABAÑAS Y APART
            </Body>
          </MenuOption>
          <MenuOption>
            <Body
              align="left"
              onClick={() => {
                router.push({ pathname: "/servicios" });
                handleBurguer();
              }}>
              SERVICIOS
            </Body>
          </MenuOption>
          <MenuOption>
            <Body
              align="left"
              onClick={() => {
                router.push({ pathname: "/ubicacion" });
                handleBurguer();
              }}>
              UBICACION - CONTACTO
            </Body>
          </MenuOption>
          <MenuOption>
            <Body
              align="left"
              onClick={() => {
                router.push({ pathname: "/complejo" });
                handleBurguer();
              }}>
              PARQUE COMPLEJO
            </Body>
          </MenuOption>
          <MenuOption>
            <Body
              align="left"
              onClick={() => {
                router.push({ pathname: "/complejo" });
                handleBurguer();
              }}>
              RESERVAR
            </Body>
          </MenuOption>
        </Dropdown>
      ) : null}
    </Root>
  );
}
