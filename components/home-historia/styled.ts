import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 50px 20px;
`;

export const Texto = styled.p`
  margin: 0;
  max-width: 760px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--gray-strong);
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0 0 0 20px;
  max-width: 760px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--gray-strong);

  ::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 11px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--yellow);
  }
`;

export const Destacado = styled.strong`
  font-weight: 700;
`;
