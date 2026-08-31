import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 20px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  @media (min-width: 815px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColTitle = styled.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-strong);
`;

export const Steps = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
  counter-reset: paso;
`;

export const Step = styled.li`
  counter-increment: paso;
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 14px;
  align-items: start;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 1.55;
  color: var(--gray-strong);

  ::before {
    content: counter(paso);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--yellow);
    font-family: "Lato", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--gray-strong);
  }
`;

export const Distancias = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Distancia = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid var(--cream);
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: var(--gray-strong);

  :last-child {
    border-bottom: none;
  }
`;

export const Km = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 17px;
  font-weight: 700;
  white-space: nowrap;
`;
