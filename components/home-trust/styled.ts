import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  padding: 40px 20px 30px 20px;
  background-color: var(--cream-weak);
  border-top: 3px solid var(--yellow);
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 20px;
  width: 100%;
  max-width: 900px;
  @media (min-width: 815px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
`;

export const StatValue = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.15;
  color: var(--gray-strong);
  white-space: nowrap;

  @media (min-width: 420px) {
    font-size: 34px;
  }
`;

export const StatLabel = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: var(--gray-weak);
  max-width: 170px;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  max-width: 860px;

  /* los controles del carousel vienen de ui/icons, con fondo semitransparente */
  .slider-control-centerleft,
  .slider-control-centerright {
    opacity: 0.55;
    transition: opacity 0.2s ease;
  }
  .slider-control-centerleft:hover,
  .slider-control-centerright:hover {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .slider-control-centerleft,
    .slider-control-centerright {
      transition: none;
    }
  }
`;

export const Opinion = styled.blockquote`
  margin: 0;
  min-height: 250px;
  /* el padding inferior deja lugar a los dots de paginación del carousel */
  padding: 0 34px 40px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  text-align: center;

  @media (min-width: 615px) {
    min-height: 220px;
    padding: 0 50px 40px 50px;
  }
`;

export const Estrellas = styled.div`
  display: flex;
  gap: 3px;

  svg {
    width: 19px;
    height: 19px;
    fill: var(--yellow);
  }
`;

export const Texto = styled.p`
  margin: 0;
  max-width: 640px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--gray-strong);

  @media (min-width: 615px) {
    font-size: 18px;
  }
`;

export const Autor = styled.footer`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-strong);
`;

export const Meta = styled.span`
  display: block;
  margin-top: 3px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-weak);
`;
