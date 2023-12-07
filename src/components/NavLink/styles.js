import { styled } from 'styled-components';

export const NavLink = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  color: inherit;

  & a {
    color: inherit;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
