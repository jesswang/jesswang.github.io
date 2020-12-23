import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const breakpointXsMin = 480;
export const breakpointSmMin = 768;
export const breakpointMdMin = 992;
export const breakpointLgMin = 1280;
export const bodyTextColor = '#312725';

export const Menu = styled.ul`
  list-style-type: none;
  margin: 32px 20px;

  @media (min-width: ${breakpointXsMin}px) {
    margin: 40px 64px 64px;
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
