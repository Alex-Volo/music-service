import { styled } from 'styled-components';

export const Track = styled.div`
  display: grid;
  grid-template-columns: 50px calc(40% - 50px) 30% 24% 2% 4%;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 12px;
`;
export const TrackLogo = styled.div`
  height: 50px;
  width: 50px;

  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${(props) => props.isAnimated && 'animation: pulse 2s infinite ease-in 1s;'}
  @keyframes pulse {
    from {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ff0000;
    }
    50% {
      width: 20px;
      height: 20px;
      border-radius: 50%;

      background-color: #00ff00;
    }
    to {
      width: 50px;
      height: 50px;
      border-radius: 50%;

      background-color: #ff0000;
    }
  }
`;

export const TrackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  fill: transparent;
  stroke: #696969;
`;
export const TrackName = styled.div`
  box-sizing: border-box;
  margin: 0 15px;
`;

export const TrackLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  stroke: #696969;
`;

export const TrackTime = styled.div`
  text-align: right;
`;
