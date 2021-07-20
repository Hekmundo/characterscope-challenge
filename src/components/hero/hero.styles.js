import styled, { css } from 'styled-components';

const red = '#bf1224';
const purple = '#823cbe';
const pink = '#f30b6f';
const silver = '#c0c0c0';
const orange = '#f3a123';
const yellow = '#f8c31c';
const green = '#b0bb36';
const blue = '#67a6dc';
const turquoise = '#6dc8bf';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HiddenImage = styled.img`
  width: 55px;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  transition: opacity 200ms ease;
  cursor: pointer;

  /* Positioning for each image */
  ${(props) => {
    switch (props.colour) {
      case red:
        return css`
          bottom: 86px;
          right: 75px;
        `;
      case purple:
        return css`
          bottom: 37px;
          right: 121px;
        `;
      case pink:
        return css`
          top: 120px;
          right: 32px;
        `;
      case silver:
        return css`
          bottom: 83px;
          left: 77px;
        `;
      case orange:
        return css`
          left: 32px;
          top: 120px;
        `;
      case yellow:
        return css`
          top: 75px;
          left: 77px;
        `;
      case green:
        return css`
          top: 75px;
          right: 77px;
        `;
      case blue:
        return css`
          top: 120px;
          right: 122px;
        `;
      case turquoise:
        return css`
          top: 31px;
          right: 122px;
        `;
      default:
        break;
    }
  }}

  animation: show-image 1ms 1.3s forwards ease, glimmer 2s 1.3s ease-in-out;
  filter: opacity(0%);

  @keyframes show-image {
    100% {
      filter: opacity(100%);
    }
  }

  @keyframes glimmer {
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const HeroContainer = styled.div`
  height: 100%;
  ${containerStyles}
  background-color: #f8f8f8;
  /* position: relative; */
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  margin: 0.67em 0.4em 60px;
  opacity: 0;
  bottom: -20px;

  animation: fade-up 1.4s forwards linear;

  @keyframes fade-up {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const HeroImage = styled.img`
  opacity: 0;
  animation: logo-spin 1.4s forwards ease-in-out;
  box-sizing: border-box;
  width: 300px;

  @keyframes logo-spin {
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 360px) {
    width: 200px;
  }
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  fill: #fefefe;
  opacity: 0.2;
  width: 50px;
  position: absolute;
  transform: rotate(90deg);
  bottom: 4vh;

  &:hover {
    opacity: 0.6;
  }

  animation: 5s ease 1.4s infinite forwards jump, fade-in 1.4s forwards linear;

  @keyframes fade-in {
    50% {
      fill: #fefefe;
    }

    100% {
      fill: #333;
    }
  }

  @keyframes jump {
    0% {
      bottom: 4vh;
    }

    10% {
      bottom: 6vh;
    }

    20% {
      bottom: 4vh;
    }

    30% {
      bottom: 6vh;
    }

    40% {
      bottom: 4vh;
    }
  }
`;
