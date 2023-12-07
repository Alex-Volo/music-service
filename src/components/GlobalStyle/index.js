import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Stratos';
    font-weight: normal;
    font-display: swap;
    src: url('${process.env.PUBLIC_URL}/assets/fonts/StratosSkyeng.woff2') format('woff2'), url('${process.env.PUBLIC_URL}/assets/fonts/StratosSkyeng.woff') format('woff');
  }

  :root {
    ${({$theme})=> ($theme === 'black' ? `
    --bg-color: #181818;
    --text-color: #fff;
    --gray-color: #4E4E4E;
    --nav-bg-color: #1C1C1C;
    ` : `
    --bg-color: #fff;
    --text-color: #000;
    --gray-color: #B1B1B1;
    --nav-bg-color: #F6F5F3;
    `)}
    
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
