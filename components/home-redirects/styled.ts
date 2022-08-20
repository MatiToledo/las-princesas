import styled from "styled-components";
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
    background-color: var(--gray-weak);
    padding: 10px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: translate(0, -50px);
`;
