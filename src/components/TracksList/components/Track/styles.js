import { styled } from 'styled-components';

export const Track = styled.div`
  display: grid;
  grid-template-columns: 50px calc((100% - 110px) * 0.4) calc((100% - 110px) * 0.3) calc((100% - 110px) * 0.3) 20px 40px;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
`;
export const TrackLogo = styled.div`
  height: 50px;
  width: 50px;

  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  
  @keyframes pulse {
    from {
      transform: scale(1.0);
    }
    12.5% {
      transform: scale(1.5);
    }
    25% {
      transform: scale(.9);
    }
    37.5% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(.9);
    }
    62.5% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(.9);
    }
    87.5% {
      transform: scale(1.2);
    }
    to {
      transform: scale(.8);
    }
  }
`;

export const TrackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  ${({$isAnimated}) => $isAnimated && 'animation: pulse 2s infinite linear 1s;'}
  fill: transparent;
  stroke: #696969;
`;

export const TrackName = styled.div`
  box-sizing: border-box;
  margin: 0 15px;
`;

export const TrackAuthor = styled.div`
  box-sizing: border-box;
  margin-right: 10px;
`;

export const TrackAlbum = styled.div`
  box-sizing: border-box;
  margin-right: 10px;
  color: #4E4E4E;
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrackLikeSvg = styled.svg`
  width: 16px;
  height: 14px;
  cursor: pointer;

  stroke: #696969;
  fill: transparent;
    &:hover {
      stroke: #ACACAC;
    }
`;

export const TrackTime = styled.div`
  text-align: right;
`;
