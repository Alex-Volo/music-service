import { styled } from 'styled-components';

export const Form  = styled.form `
  box-sizing: border-box;
  background-color: #fff;
  width: 366px;
  height: 439px;
  border-radius: 12px;
  padding: 45px;
  margin: auto auto;
`;

export const Logo  = styled.img `
  display: block;
  margin: 0 auto;
`;

export const InputsList  = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 60px;
  
  & li {
    margin-top: 40px;
  }
`;


export const BtnContainer  = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
