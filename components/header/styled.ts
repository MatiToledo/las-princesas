import { Whatsapp } from "ui/icons";
import styled from "styled-components";

export const Root = styled.section`
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

export const LogoContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

export const NavLeft = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 992px) {
    display: flex;
  }
  & > p {
    padding: 15px;
    :hover {
      background-color: var(--white);
      cursor: pointer;
    }
  }
  & > a {
    text-decoration: none;
    padding: 15px;
    :hover {
      background-color: var(--white);
      cursor: pointer;
    }
  }
`;
