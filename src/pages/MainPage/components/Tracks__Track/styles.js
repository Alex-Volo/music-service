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
    & > svg {
      ${(props) => props.isAnimated && 'animation: pulse 2s infinite ease-in 1s;'}
    }
  
  @keyframes pulse {
    from {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1.2);

    }
    to {
      transform: scale(1.8);

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
