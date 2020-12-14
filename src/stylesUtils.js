import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const breakpointSmMin = 480;
export const breakpointMdMin = 768;
export const breakpointLgMin = 1280;
export const bodyTextColor = '#312725';

export const Menu = styled.ul`
  list-style-type: none;
  margin: 32px 20px;

  @media (min-width: ${breakpointSmMin}px) {
    margin: 40px 64px;
  }
`;
export const MenuListItem = styled.li`
  display: inline-flex;
  margin-right: 42px;
`;
export const StyledNavLink = styled(NavLink).attrs(props => ({
  activeStyle: { fontWeight: 600 }
}))`
  color: ${bodyTextColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
