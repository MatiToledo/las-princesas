import styled from "styled-components";
export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
  justify-content: center;
  @media (min-width: 815px) {
    max-width: 1100px;
  }
`;

export const ServiceContainer = styled.div`
  margin: 30px auto 10px auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 350px;
  flex-wrap: wrap;
  @media (min-width: 615px) {
    width: 600px;
  }
  @media (min-width: 1040px) {
    width: 1000px;
  }
`;

export const CardsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 815px) {
    flex-direction: row;
    justify-content: center;
  }
`;
