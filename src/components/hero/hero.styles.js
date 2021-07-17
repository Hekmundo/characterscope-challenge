import styled, { css } from 'styled-components';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled.div`
  height: 100%;
  ${containerStyles}
  background-color: #eee;
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

export const HeroImage = styled.img`
  opacity: 0;
  animation: logo-spin 1.4s forwards ease-in-out;

  @keyframes logo-spin {
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
  }
`;

export const ArrowContainer = styled.button`
  cursor: pointer;
  fill: #333;
  opacity: 0.2;
  width: 50px;
  position: absolute;
  transform: rotate(90deg);
  bottom: 4vh;

  animation: jump 5s infinite;
  animation-timing-function: ease;

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

  &:hover {
    opacity: 0.8;
  }
`;
