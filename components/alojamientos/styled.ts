import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  padding: 25px;
  flex-direction: column;
  overflow: hidden;
  min-height: calc(100vh - 170px);
  justify-content: center;
`;

export const CardsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;
  flex-direction: column;
  gap: 30px;
  position: relative;
  display: none;

  ::before {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%);
    content: "";
    width: 100vw;
    height: 210px;
    background-color: var(--cream);
  }

  @media (min-width: 992px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
