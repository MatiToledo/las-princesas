import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: 20px;
    display: grid;
    row-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    gap: 30px;
    display: grid;
    row-gap: 40px;
    grid-template-columns: 1fr 1fr;
  }
`;
