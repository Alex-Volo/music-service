import { styled } from 'styled-components';

export const PlayerTrack = styled.div`
  box-sizing: border-box;
  padding: 0 33px;
  display: flex;
  gap: 10px;
`;
export const TrackLogo = styled.div`
  height: 50px;
  width: 50px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TrackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  fill: transparent;
  stroke: #696969;
`;
export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  line-height: 24px;
  width: 50px;
  & a {
    color: #fff;
    text-decoration: none;
  }
`;

