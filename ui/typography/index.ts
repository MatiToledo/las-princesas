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

export const Body: any = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: ${(props) => props.color || "var(--gray-strong)"};
  text-align: ${(props: any) => props.align || "center"};
  text-transform: initial;
  line-height: initial;
`;

export const Caracteristic = styled(Body)`
  background-color: var(--cream);
  padding: 15px 5px;
  position: relative;
  /* border-bottom: 1px solid #fff;
  border-top: 1px solid #fff; */
  ::after {
    display: flex;
    position: absolute;
    bottom: 0px;
    content: "";
    width: 100%;
    height: 2px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;
