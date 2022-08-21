import styled from "styled-components";

export const Title: any = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: var(--gray-strong);
  margin: 0;
  text-rendering: optimizelegibility;
  text-align: ${(props: any) => props.align || "center"};
  text-transform: initial;
  line-height: initial;
`;

export const Subtitle: any = styled.h2`
  margin: 0;
  font-size: 25px;
  font-weight: ${(props: any) => props.weight || 400};
  color: ${(props) => props.color || "var(--white)"};
`;

export const Large: any = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  font-weight: ${(props: any) => props.weight || 400};
  color: ${(props) => props.color || "var(--gray-weak)"};
`;

export const Body = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: ${(props) => props.color || "var(--gray-strong)"};
  text-align: center;
  text-transform: initial;
  line-height: initial;
`;
