import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #e1f5fe;
  }

  h1, h2 {
    color: #0277bd;
  }
`;

export default GlobalStyles;
