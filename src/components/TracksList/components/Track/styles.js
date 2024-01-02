import { styled } from 'styled-components';

export const Track = styled.div`
  display: grid;
  grid-template-columns:
    50px calc((100% - 110px) * 0.4) calc((100% - 110px) * 0.3)
    calc((100% - 110px) * 0.3) 20px 40px;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
  border-radius: 10px;
  padding-right: 8px;
  transition: box-shadow 0.2s;
  ${({ $isAnimated }) =>
    $isAnimated &&
    'box-shadow: inset 0px 0px 30px #020202c7, 0px 0px 10px #7787ffb8;'}

  &:hover {
    box-shadow: inset 0px 0px 30px #7787ffb8, 0px 0px 10px #7787ffb8;
  }
`;
export const TrackLogo = styled.div`
  height: 50px;
  width: 50px;

  background-color: ${({ $isAnimated }) =>
    $isAnimated ? 'transparent' : 'var(--nav-bg-color)'};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    12.5% {
      transform: scale(1.5);
    }
    25% {
      transform: scale(0.9);
    }
    37.5% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(0.9);
    }
    62.5% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(0.9);
    }
    87.5% {
      transform: scale(1.2);
    }
    to {
      transform: scale(0.8);
    }
  }
`;

export const TrackLogoSvg = styled.svg`
  height: 20px;
  width: 20px;
  ${({ $isAnimated }) =>
    $isAnimated && 'animation: pulse 2s infinite linear 1s;'}
  ${({ $isPaused }) => $isPaused && 'animation: none;'}
  fill: transparent;
  stroke: var(--gray-color);
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
  color: var(--gray-color);
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
  fill: ${({ $isLiked }) => ($isLiked ? '#8b6bf0' : 'transparent')};
  &:hover {
    stroke: #acacac;
  }
`;

export const TrackTime = styled.div`
  text-align: right;
`;
