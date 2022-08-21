import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  background-image: url("https://res.cloudinary.com/las-princesas-cabanas/image/upload/v1661035713/home_h3amzl.jpg");
  background-repeat: none;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: flex-end;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  height: 155px;
  width: 100%;
  padding-right: 70px;
  padding-left: 30px;
`;

export const BoxButton = styled.div`
  display: flex;
  background-color: var(--yellow);
  width: 90%;
  height: 108px;
  padding: 35px;
  padding-right: 150px;
  transform: translate(0, -20px);
`;
