import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
`;

export const CaracteristicContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 20px;
  justify-items: center;
  margin-top: 30px;
`;
