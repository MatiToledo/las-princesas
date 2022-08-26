import { Contact } from "./../../ui/icons/index";
import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--yellow);
  width: 100%;
  height: 480px;
  padding: 20px;

  & > form {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  @media (min-width: 815px) {
    display: flex;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 815px) {
    flex-grow: 2;
    max-width: 700px;
  }
`;
