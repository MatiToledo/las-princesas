import styled, { keyframes } from "styled-components";
export const Root = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: 390px;
  width: 100%;
  position: relative;

  & > h2 {
    position: absolute;
    z-index: 999;
    top: 40px;
    width: 250px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }

  & > p {
    position: absolute;
    z-index: 999;
    top: 220px;
    width: 320px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    background-color: rgba(265, 265, 265, 0.4);
    padding: 10px;
  }
`;
const SliceAnimation = keyframes`
  0% {transform: translateY(100vh);} 
  100% {transform: translateY(-25px);} 
`;
export const CardsContainer: any = styled.div`
  transform: translatey(-25px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  &.animated {
    animation: ${SliceAnimation} 1.5s ease-out;
  }
  @media (min-width: 815px) {
    flex-direction: row;
    justify-content: center;
  }
`;
