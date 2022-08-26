import { Whatsapp } from "ui/icons";
import styled from "styled-components";

export const Root = styled.div`
  background-color: var(--cream);
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const WhatsappLogo = styled.div`
  background-image: url("https://res.cloudinary.com/las-princesas-cabanas/image/upload/v1661039012/whatsapp_ulxrao.png");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 58px;
  height: 58px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: var(--white);
  border-radius: 50%;
`;

export const NavLeft = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 815px) {
    display: flex;
  }
  & > p {
    padding: 15px;
    :hover {
      background-color: var(--white);
      cursor: pointer;
    }
  }
`;
