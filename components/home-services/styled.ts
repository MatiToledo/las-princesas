import styled from "styled-components";
export const Root = styled.section`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 20px;
  justify-items: center;
  margin-top: 30px;
`;
