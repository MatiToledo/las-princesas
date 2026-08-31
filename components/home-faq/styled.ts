import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 50px 20px;
  background-color: var(--cream-weak);
`;

export const List = styled.div`
  width: 100%;
  max-width: 780px;
  border-top: 1px solid var(--cream);
`;

export const Item = styled.details`
  border-bottom: 1px solid var(--cream);

  &[open] > summary::after {
    transform: rotate(45deg);
  }
`;

export const Question = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 4px;
  cursor: pointer;
  list-style: none;
  font-family: "Lato", sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--gray-strong);

  ::-webkit-details-marker {
    display: none;
  }

  :focus-visible {
    outline: 2px solid var(--gray-strong);
    outline-offset: 2px;
  }

  ::after {
    content: "+";
    flex-shrink: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    color: var(--yellow);
    transition: transform 0.2s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    ::after {
      transition: none;
    }
  }
`;

export const Answer = styled.div`
  padding: 0 4px 20px 4px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: var(--gray-strong);
`;
