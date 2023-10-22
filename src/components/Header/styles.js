import { styled } from 'styled-components';

export const Header = styled.header `
  grid-column: 1 / -1;
  min-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 60% 25%;
  align-items: center;
`;

export const LogoContainer = styled.div `
  grid-column: 1 / 2;
  `;
export const Logo = styled.img `
  width: 113.33px;
  height: 17px;
`
