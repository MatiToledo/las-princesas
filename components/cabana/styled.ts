import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

export const CaracteristicContainer = styled.div`
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  justify-content: center;
  /* @media (min-width: 992px) {
    justify-content: space-between;
  } */
`;

export const Equipament = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
  align-items: center;
  margin-top: 20px;
  position: relative;
`;

export const ServiceContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  align-items: flex-start;
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
`;
