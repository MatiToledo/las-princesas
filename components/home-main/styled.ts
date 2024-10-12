import styled from "styled-components";
import { Title } from "ui/typography";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  position: relative;
`;

export const Hack = styled(Title)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  color: red;
  background-color: #000000b8;
`;

export const ImageContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
`;
