import { styled } from 'styled-components';

export const PlayerLikeDislikeGroup = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const LikeSvg = styled.svg`
  width: 15px;
  height: 15px;
  stroke: var(--active-color);
  cursor: pointer;

  fill: ${({ $isLiked }) => ($isLiked ? '#8b6bf0' : 'transparent')};
  &:hover {
    stroke: #acacac;
  }
`;

export const DislikeSvg = styled.svg`
  width: 15px;
  height: 15px;
  stroke: var(--active-color);
  fill: transparent;
`;
