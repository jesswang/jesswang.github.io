import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
import { Menu, MenuListItem, StyledNavLink } from './stylesUtils';

export function Photography() {
  const match = useRouteMatch();

  return (
    <div>
      <Menu>
        <MenuListItem><StyledNavLink exact to="/">about</StyledNavLink></MenuListItem>
        <MenuListItem><StyledNavLink to="/photography" selected>photography</StyledNavLink></MenuListItem>
      </Menu>
      <List>
        <li><StyledNavLink to={`${match.url}/us`}>U.S.</StyledNavLink></li>
        <li><StyledNavLink to={`${match.url}/japan`}>Japan</StyledNavLink></li>
        <li><StyledNavLink to={`${match.url}/norway`}>Norway</StyledNavLink></li>
        <li><StyledNavLink to={`${match.url}/china`}>China</StyledNavLink></li>
        <li><StyledNavLink to={`${match.url}/iceland`}>Iceland</StyledNavLink></li>
      </List>
      <List style={{ marginTop: '20px' }}>
        <li><StyledNavLink to={`${match.url}/portraits`}>Portraits</StyledNavLink></li>
      </List>
      <Switch>
        <Route path={`${match.path}/us`}>
          
        </Route>
      </Switch>
    </div>
  );
}

const List = styled.ul`
  list-style-type: none;
  margin-left: 64px;
  line-height: 20px;
`;