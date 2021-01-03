import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const breakpointXsMin = 480;
export const breakpointSmMin = 768;
export const breakpointMdMin = 992;
export const breakpointLgMin = 1280;
export const bodyTextColor = '#312725';

export const StyledNavLink = styled(NavLink).attrs(props => ({
  activeStyle: { fontWeight: 600 }
}))`
  color: ${bodyTextColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
