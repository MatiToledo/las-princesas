import styled from "styled-components";

export const Root = styled.section`
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

export const CaracteristicContainer = styled.div<{ cant: number }>`
  position: relative;
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
  padding: 0px 50px 20px;
  justify-content: center;
  min-height: ${({ cant }) => `calc(${cant * 50}px + 150px)`};
  /* @media (min-width: 992px) {
    justify-content: space-between;
  } */
`;

export const SeeMore = styled.a`
  position: absolute;
  bottom: 2%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: var(--yellow);
  height: 38px;
  border-radius: 6px;
  border: solid 1px var(--white);
  padding: 10px 20px;
  text-decoration: none;
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
