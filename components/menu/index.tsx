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
            <a
              href={
                "https://www.alquilerargentina.com/alojamientos/uj56-Complejo-Las-Princesas-Caba%C3%B1as-Frente-al-Rio-Los-Reartes.html"
              }
              rel="noopener noreferrer"
              target="_blank">
              <Body
                align="left"
                onClick={() => {
                  handleBurguer();
                }}>
                RESERVAR
              </Body>
            </a>
          </MenuOption>
        </Dropdown>
      ) : null}
    </Root>
  );
}
