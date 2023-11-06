import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Stratos';
    font-weight: normal;
    font-display: swap;
    src: url('/fonts/StratosSkyeng.woff2') format('woff2'), url('/fonts/StratosSkyeng.woff') format('woff');
  }
  
  body {
    margin: 0;
    font-family: 'Stratos', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
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
`;
