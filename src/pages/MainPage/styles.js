import { styled } from 'styled-components';

export const wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  display: grid;
  grid-template-columns: 13% 65% 22%;
  grid-template-rows: 70px 1fr;
  margin: 0 auto;
  padding: 20px 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 0;
  transition: all 0.4s;
`;
