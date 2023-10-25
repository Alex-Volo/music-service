import { styled } from 'styled-components';

export const Btn = styled.button`
  display: block;
  width: 100%;
  height: 52px;
  font-family: 'Stratos', sans-serif;
  border: 1px solid #d0cece;
  border-radius: 6px;
  background-color: transparent;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d0cece;
  }

  &:disabled {
    opacity: 0.1;
  }
  & a {
    margin: -1px -1px -1px -1px;
    border-radius: 6px;
    color: inherit;
    background-color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ${({ $isColored }) => {
    if ($isColored) {
      return `
      border: none;
      background-color: #580ea2;
      color: #fff;
      &:hover {
      background-color: #580ea2;
      color: #fff;
      }
      &:active {
      background-color: #271a58;
      }
    `;
    }
  }}
`;

// export const purple = styled.header `
//   background-color: #580ea2;
//   color: #fff;
// `;

// export const purple:hover = styled.header `
//   background-color: #3f007d;
// `;

// export const purple:active = styled.header `
//   background-color: #271a58;
// `;
