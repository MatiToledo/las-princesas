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
        <Image src={src} layout="fill" objectFit="cover" alt={title}></Image>
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
        <Image src={src} layout="fill" objectFit="cover" alt={title}></Image>
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
  position: relative;
  justify-content: space-between;
  max-width: 365px;
  ::after {
    content: "";
    background-color: var(--cream);
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: -25px;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }
  @media (min-width: 992px) {
    ::after {
      display: none;
    }
  }
`;

const AlojamientoImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: 233px;
  position: relative;
  cursor: pointer;
  @media (min-width: 815px) {
    height: 233px;
    /* max-width: 370px; */
  }
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
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          onClick={handleClick}
          alt={title}
        ></Image>
      </AlojamientoImgContainer>
      <Subtitle align="center" color="var(--gray-weak)">
        {title}
      </Subtitle>
      <Body align="left">{description}</Body>
      <ButtonPrimary onClick={handleClick}>VER MAS</ButtonPrimary>
    </RootAlojamiento>
  );
}

//CARD SERVICE

const RootService = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 15px;
  align-items: center;
  max-width: 365px;

  ::after {
    content: "";
    background-color: var(--cream);
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: -25px;
  }

  @media (min-width: 992px) {
    ::after {
      bottom: -20px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    max-width: 550px;
  }
`;

const ServiceImgContainer = styled.div`
  width: 100%;
  min-height: 233px;
  height: 260px;
  position: relative;
  @media (min-width: 1200px) {
    width: 300px;
    min-height: 200px;
    height: 200px;
  }
`;

const ServiceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  @media (min-width: 1200px) {
    width: 320px;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
  }
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
        <Image src={src} layout="fill" objectFit="cover" alt={title}></Image>
      </ServiceImgContainer>
      <ServiceTextContainer>
        <Subtitle align="center" color="var(--gray-weak)">
          {title}
        </Subtitle>
        <Body align="left">{description}</Body>
      </ServiceTextContainer>
    </RootService>
  );
}
