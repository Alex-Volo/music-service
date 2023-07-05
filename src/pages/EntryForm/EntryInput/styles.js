import { styled } from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  font-family: Stratos, sans-serif;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #d0cece;
  outline: none;

  &::placeholder {
    font-family: Stratos, sans-serif;
    color: #e1e1e1;
  }
`;
