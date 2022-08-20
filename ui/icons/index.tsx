import styled from "styled-components";
import MenuIcon from "./menu.svg";
import CloseIcon from "./close.svg";
import WhatsappIcon from "./whatsapp.svg";

export const Burguer = styled(MenuIcon)`
  width: 35px;
  height: 35px;
  stroke: var(--gray-strong);
`;

export const Close = styled(CloseIcon)`
  stroke: var(--gray-strong);
  width: 20px;
  height: 20px;
`;

export const Whatsapp = styled(WhatsappIcon)`
  display: flex;
  width: 40px;
  height: 40px;
`;
