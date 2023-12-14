import { styled } from 'styled-components';

export const ProgressBar = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? '#626bb2'};

  --progress-bg-color: #2e2e2e;
  position: relatve;
  box-sizing: border-box;
  width: 100%;
  height: var(--progress-height);
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--nav-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--nav-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;

export const Duration = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 0 10px;

  top: -25px;
  width: 100%;
  text-align: right;
`;
