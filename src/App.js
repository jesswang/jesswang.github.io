import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import { Photography } from './Photography';
import backgroundXs from "./assets/background-xs.jpg";
import backgroundSm from "./assets/background-sm.jpg";
import backgroundMd from "./assets/background-md.jpg";
import backgroundLg from "./assets/background-lg.jpg";
import { breakpointXsMin, breakpointSmMin, breakpointLgMin, bodyTextColor, Menu, MenuListItem, StyledNavLink } from './stylesUtils';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/photography">
          <Photography />
        </Route>
        <Route path="/">
          <ContentContainer>
            <picture>
              <source media={`(min-width: ${breakpointLgMin}px`} srcSet={backgroundLg} />
              <source media={`(min-width: ${breakpointSmMin}px`} srcSet={backgroundMd} />
              <source media={`(min-width: ${breakpointXsMin}px`} srcSet={backgroundSm} />
              <BackgroundImage src={backgroundXs} alt="" />
            </picture>
            <FixedMenu>
              <MenuListItem><StyledNavLink exact to="/">about</StyledNavLink></MenuListItem>
              <MenuListItem><StyledNavLink to="/photography">photography</StyledNavLink></MenuListItem>
            </FixedMenu>
            <Info>
              <InfoText>I am Jessica Wang, a software engineer and photographer.</InfoText>
              <Contact><ContactLink href="mailto:jssxwang@gmail.com" target="_blank" rel="noopener noreferrer">email</ContactLink></Contact>
              <Contact><ContactLink href="https://www.linkedin.com/in/jessicawang3" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink></Contact>
              <Contact><ContactLink href="https://www.instagram.com/jesswang.photo" target="_blank" rel="noopener noreferrer">Instagram</ContactLink></Contact>
            </Info>
          </ContentContainer>
        </Route>
      </Switch>
    </HashRouter>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1600px;
`;
const FixedMenu = styled(Menu)`
  position: absolute;
  top: 0;
  list-style-type: none;
  margin: 32px 20px;

  @media (min-width: ${breakpointXsMin}px) {
    margin: 40px 64px;
  }
`;
const BackgroundImage = styled.img`
  width: 100%;
`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 20px 32px;
  
  @media (min-width: ${breakpointXsMin}px) {
    margin: 64px;
  }
`;
const InfoText = styled.p`
  margin-bottom: 24px;
  line-height: 18px;
`;
const Contact = styled.div`
  line-height: 22px;
`;
const ContactLink = styled.a`
  color: ${bodyTextColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default App;
