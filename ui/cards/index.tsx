import styled, { keyframes } from "styled-components";
import { Body, Large, Subtitle } from "ui/typography";
import Image, { StaticImageData } from "next/image";
import { ButtonPrimary } from "ui/buttons";
import { useRouter } from "next/router";

//HOME CARD
const RootHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9f9a8d;
  width: 100%;
  height: auto;
  @media (min-width: 815px) {
    max-width: 425px;
  }
`;

const Header = styled.div`
  background-color: var(--yellow);
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: calc(100vw - 300px);
  position: relative;
  @media (min-width: 815px) {
    min-height: 200px;
    height: 200px;
  }
`;

const Text = styled.div`
  padding: 20px 8px;
`;

type CardHomeProps = {
  title: string;
  src: StaticImageData;
  body: string;
};
export function CardHome({ title, src, body }: CardHomeProps) {
  return (
    <RootHome>
      <Header>
        <Subtitle>{title}</Subtitle>
      </Header>
      <ImageContainer>
        <Image src={src} layout="fill" objectFit="cover"></Image>
      </ImageContainer>
      <Text>
        <Body color="var(--white)">{body}</Body>
      </Text>
    </RootHome>
  );
}

//REDIRECT CARD
const SliceAnimation = keyframes`
  0% {transform: translateY(100vh);} 
  100% {transform: translateY(-25px);} 
`;
const RootRedirect = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cream);
  height: 335px;
  width: 100%;
  &.animated {
    animation: ${SliceAnimation} 1.5s ease-out;
  }
`;

const RedirectImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  /* height: 260px; */
  height: calc(100vw - 300px);
  position: relative;
  /* @media (min-width: 815px) {
    min-height: 233px;
    height: 233px;
  } */
`;

const BounceZommAnimation = keyframes`
  0%,  100% {
        animation-timing-function: ease-out;
        transform: scale(1) translate(20px, -50px);
        /* transform: translate(20px, -50px); */
    }
    50% {
        animation-timing-function: ease-in;
        transform: scale(1.1) translate(20px, -50px);
        /* transform: translate(20px, -50px); */
    }
`;

const RedirectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  width: 200px;
  padding: 20px;
  transform: translate(20px, -50px);
  border-radius: 3px;
  animation: ${BounceZommAnimation} 1s ease-out;
  animation-delay: 1.5s;
  & > button {
    cursor: pointer;
  }
`;

type CardRedirectProps = {
  src: StaticImageData;
  title: string;
  path: string;
};

export function CardRedirect({ title, src, path }: CardRedirectProps) {
  const router = useRouter();
  function handleClick() {
    router.push({ pathname: "/" + path });
  }

  return (
    <RootRedirect>
      <RedirectImgContainer>
        <Image src={src} layout="fill" objectFit="cover"></Image>
      </RedirectImgContainer>
      <RedirectBox>
        <Large>{title}</Large>
        <ButtonPrimary onClick={handleClick}>VER</ButtonPrimary>
      </RedirectBox>
    </RootRedirect>
  );
}

//ALOJAMIENTOS CARD

const RootAlojamiento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  ::before {
    content: "";
    width: 75%;
    height: 1px;
    background-color: var(--gray-weak);
    position: relative;
  }
`;

const AlojamientoImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: 260px;
  position: relative;
`;

type CardAlojamientoProps = {
  title: string;
  description: string;
  src: StaticImageData;
  path: string;
};

export function CardAlojamiento({
  title,
  description,
  src,
  path,
}: CardAlojamientoProps) {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: "/alojamientos/" + path });
  }
  return (
    <RootAlojamiento>
      <AlojamientoImgContainer>
        <Image src={src} layout="fill" objectFit="cover"></Image>
      </AlojamientoImgContainer>
      <Subtitle color="var(--gray-weak)">{title}</Subtitle>
      <Body align="left">{description}</Body>
      <ButtonPrimary onClick={handleClick}>VER MAS</ButtonPrimary>
    </RootAlojamiento>
  );
}

//CARD SERVICE

const RootService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  ::before {
    content: "";
    width: 75%;
    height: 1px;
    background-color: var(--gray-weak);
    position: relative;
  }
`;

const ServiceImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: 260px;
  position: relative;
`;

type CardServiceProps = {
  title: string;
  description: string;
  src: StaticImageData;
};

export function CardService({ title, description, src }: CardServiceProps) {
  return (
    <RootService>
      <ServiceImgContainer>
        <Image src={src} layout="fill" objectFit="cover"></Image>
      </ServiceImgContainer>
      <Subtitle color="var(--gray-weak)">{title}</Subtitle>
      <Body align="left">{description}</Body>
    </RootService>
  );
}
