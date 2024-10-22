import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }

  h2 {
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
