import styled from "styled-components";
import { Body } from "ui/typography";

export const BaseButoon = styled.button`
  background-color: var(--yellow);
  width: 100%;
  height: 38px;
  border-radius: 6px;
  border: solid 1px var(--gray-strong);

  & > p {
    font-family: "Lato", sans-serif;
  }
`;

export function ButtonPrimary({ children }: any) {
  return (
    <BaseButoon>
      <Body color="var(--white)">{children}</Body>
    </BaseButoon>
  );
}
