import { styled } from 'styled-components';

export const ModalLI = styled.li`
  cursor: pointer;
  padding: 12px 0;

  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? '#626bb2' : 'var(--text-color)')};
  font-size: 20px;
  line-height: 24px;
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};

  &hover {
    text-decoration: underline;
    color: #626bb2;
  }
`;
