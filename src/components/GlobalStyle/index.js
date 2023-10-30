import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Stratos';
    src: url(./assets/fonts/Stratos-Regular.woff2) format(woff2);
  }
  
  body {
    margin: 0;
    font-family: Stratos, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #302030;
    min-height: 100vh;
    min-width: 100%;
    max-width: 100%;
  }
  
  #root {
    display: flex;
    max-width: 100vw;
    min-height: 100vh;
  }
  
  .loading {
    position: relative;
  }
  
  .loading::before {
    content: '';
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    background-color: #313131;
    display: block;
  }
`;
