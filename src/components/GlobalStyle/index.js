import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Stratos';
    font-weight: normal;
    font-display: swap;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/StratosSkyeng.woff2) format('woff2'), url(${process.env.PUBLIC_URL}/assets/fonts/StratosSkyeng.woff) format('woff');
  }

  :root {
    ${({ $theme }) =>
      $theme === 'black'
        ? `
    --bg-color: #181818;
    --text-color: #fff;
    --gray-color: #4E4E4E;
    --nav-bg-color: #242424;
    --player-bg: #000000d7;
    --active-color: #d9d9d9;
    --hover-color: #999999;
    --inactive-color: #696969;
    `
        : `
    --bg-color: #f2f1f7;
    --text-color: #000;
    --gray-color: #3e4597;
    --nav-bg-color: #c2c9ef;
    --player-bg: #f2f1f7d7;
    --active-color: #696969;
    --hover-color: #494949;
    --inactive-color: #b9b9b9;
    `}
    
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
