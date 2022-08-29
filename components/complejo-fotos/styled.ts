import styled from "styled-components";

export const Root = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PhotosContainer = styled.div`
  display: grid;
  margin-top: 30px;
  gap: 20px;
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PhotoImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: 260px;
  position: relative;
  max-width: 385px;
`;
