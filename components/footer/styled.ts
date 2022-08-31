import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: var(--gray-weak);
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
`;

export const WhatsappLogo = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 58px;
  height: 58px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: var(--white);
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;
