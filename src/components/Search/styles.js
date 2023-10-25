import { styled } from 'styled-components';

export const Search = styled.div `
  box-sizing: border-box;
  grid-column: 2 / 3;
  min-width: 100%;
  margin-left:4%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4e4e4e;
`;

export const SearchSvg = styled.svg `
  width: 17px;
  height: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 15px 0px 8px;
  stroke: white;
  fill: transparent;
`;

export const SearchInput = styled.input `
  display: block;
  color: #fff;
  width: 100%;
  margin-top: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Stratos';
  line-height: 1;
    &::placeholder {
      color: #fff;
    }
`;
