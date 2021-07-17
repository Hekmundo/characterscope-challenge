import styled, { createGlobalStyle, css } from 'styled-components';

const fontColor = '#333';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${fontColor};
    font-family: 'Cabin', sans-serif;
    background-color: #fefefe;
  }

  button {
    border: none;
    background: transparent;
    padding: 0;
    margin:0;
  }

  a {
    text-decoration: none;
    color: ${fontColor};
  }

  .heading1 {
    font-weight: 700;
  }

  .heading3 {
    font-weight: 400;
  }
`;

export const ArrowContainer = styled.button`
  cursor: pointer;
  fill: #333;
  opacity: 0.1;
  width: 50px;
  position: absolute;

  ${(props) =>
    props.bottom
      ? css`
          transform: rotate(90deg);
          bottom: 5vh;
        `
      : ''}

  ${(props) =>
    props.top
      ? css`
          transform: rotate(-90deg);
          top: 5vh;
        `
      : ''}

  &:hover {
    opacity: 0.8;
  }
`;
