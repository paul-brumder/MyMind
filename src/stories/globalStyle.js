import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Chivo:400,700&display=swap');

  html {
    font-size: 62.5%; /* 1rem = 10px  */
    font-family: 'Chivo', sans-serif;
  }

  button {
    outline: none;
  }
`;

export default GlobalStyle;
