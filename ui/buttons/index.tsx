import styled from "styled-components";
import { Body } from "ui/typography";

export const BaseButton = styled.button`
  background-color: var(--yellow);
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border: solid 1px var(--white);
  padding: 10px 20px;
  cursor: pointer;

  & > p {
    font-family: "Lato", sans-serif;
  }
`;

export const SecondButton = styled(BaseButton)`
  background-color: var(--gray-strong);
  border: solid 1px var(--gray-weak);
`;

export function ButtonPrimary({ children, onClick }: any) {
  return (
    <BaseButton onClick={onClick}>
      <Body color="var(--white)">{children}</Body>
    </BaseButton>
  );
}
export function ButtonSecondary({ children, onClick }: any) {
  return (
    <SecondButton onClick={onClick}>
      <Body color="var(--white)">{children}</Body>
    </SecondButton>
  );
}
