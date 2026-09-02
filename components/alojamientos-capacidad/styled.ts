import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 50px 20px;
  background-color: var(--cream-weak);
`;

export const Scroller = styled.div`
  width: 100%;
  max-width: 860px;
  overflow-x: auto;
`;

export const Tabla = styled.table`
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: var(--gray-strong);

  th,
  td {
    padding: 13px 12px;
    text-align: left;
    border-bottom: 1px solid var(--cream);
  }

  thead th {
    font-family: "Lato", sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--gray-weak);
    border-bottom: 2px solid var(--yellow);
  }

  tbody th {
    font-weight: 600;
  }

  td:last-child {
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
`;
