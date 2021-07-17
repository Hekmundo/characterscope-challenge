import { createGlobalStyle } from 'styled-components';

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
