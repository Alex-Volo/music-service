import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-top: 10px;
  width: 248px;
  height: 305px;
  padding: 20px 32px;
  background-color: var(--nav-bg-color);
  overflow: hidden;
  border-radius: 12px;
`;

export const ModalList  = styled.ul`
  box-sizing: border-box;
  height: 241px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  scrollbar-color: white, gray;

  /* & li {
    padding: 12px 0;
  }

  & a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 20px;
    line-height: 24px;
  }

  & a:hover {
    text-decoration: underline;
    color: #626bb2;
  } */

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 4px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0export const 2);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0export const 2);
    border-radius: 10px;
    background-color: var(--inactive-color);
  }
`;

