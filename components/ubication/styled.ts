import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  /* min-height: calc(100vh - 70px); */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > span {
    display: none;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 59% 39%;
    gap: 20px;
    & > span {
      display: initial;
    }
  }
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;
