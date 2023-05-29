import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLayout = styled.header`
  padding: 4px;
  margin-bottom: 4px;
  box-shadow: 1px 2px 9px 0px rgb(0 0 0 / 55%);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;

  &.active {
    color: #ffa500;
  }

  :hover {
    text-decoration: underline;
  }
`;
