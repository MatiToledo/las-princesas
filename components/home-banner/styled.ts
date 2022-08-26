import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% {transform: translateY(100vh);} 
  80% {transform: translateY(-15px);}
  100% {transform: translateY(0px);} 
`;
const BounceAnimationButton = keyframes`
  0% {transform: translateY(100vh);} 
  80% {transform: translateY(-35px);}
  100% {transform: translateY(-20px);} 
`;
const BounceAnimationButtonDesktop = keyframes`
  0% {transform: translate(-20px,100vh);} 
  80% {transform: translate(-20px,-35px);}
  100% {transform: translate(-20px,-20px);} 
`;

export const Root: any = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  top: 50%;
  transform: translate(0, -50%);
  @media (min-width: 515px) {
    left: ${(props: any) => props.left};
    right: ${(props: any) => props.right};
  }
`;

export const Box = styled.div`
  animation: ${BounceAnimation} 1s ease-out;
  padding: 30px 12px;
  width: 100vw;
  max-width: 515px;
  background-color: var(--white);
`;

export const BoxButton = styled.div`
  background-color: var(--yellow);
  animation: ${BounceAnimationButton} 1s ease-out;
  animation-delay: 1s;
  width: 90%;
  padding: 30px 15px;
  padding-right: 35%;
  transform: translateY(-20px);
  animation-fill-mode: backwards;
  @media (min-width: 515px) {
    animation: ${BounceAnimationButtonDesktop} 1s ease-out;
    animation-delay: 1s;
    width: auto;
    animation-fill-mode: backwards;
    padding: 20px 60px;
    transform: translate(-20px, -20px);
  }
`;
