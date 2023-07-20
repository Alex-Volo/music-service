import { styled } from 'styled-components';

export const Container = styled.div`
  width: 431px;
  height: 366px;
  margin: auto auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  margin: 0;
  box-sizing: border-box;
  font-size: 160px;
  line-height: 168px;
`;

export const Lead = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin: 0;
`;

export const Image = styled.img`
  margin: 0 10px -16px;
`;

export const Text = styled.p`
  color: #4e4e4e;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
`;
