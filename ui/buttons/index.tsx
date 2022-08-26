import styled from "styled-components";
import { Body } from "ui/typography";

export const BaseButoon = styled.button`
  background-color: var(--yellow);
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border: solid 1px var(--white);
  padding: 10px 20px;

  & > p {
    font-family: "Lato", sans-serif;
  }
`;

export function ButtonPrimary({ children, onClick }: any) {
  return (
    <BaseButoon onClick={onClick}>
      <Body color="var(--white)">{children}</Body>
    </BaseButoon>
  );
}
