import { 
  useState,
  useEffect,
} from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import { useMobileBreakpoint } from './useMobileBreakpoint';
import { Photography } from './Photography';
import backgroundXs from './assets/background-xs.jpg';
import backgroundSm from './assets/background-sm.jpg';
import backgroundMd from './assets/background-md.jpg';
import backgroundLg from './assets/background-lg.jpg';
import { 
  breakpointXsMin,
  breakpointSmMin,
  breakpointMdMin,
  bodyTextColor,
  StyledNavLink,
} from './stylesUtils';

function Nav() {
  let location = useLocation();
  const isMobile = useMobileBreakpoint();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  useEffect(() => {
    setIsSidePanelOpen(false);
  }, [location]);

  if (isMobile) {
    return (
      <>
        <HamburgerMenu onClick={() => setIsSidePanelOpen(true)} aria-label="Menu" width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9C9 9 17 9 25 9" stroke="#312725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 1C9 1 17 1 25 1" stroke="#312725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 17C9 17 17 17 25 17" stroke="#312725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </HamburgerMenu>
        <SidePanel open={isSidePanelOpen}>
          <Close onClick={() => setIsSidePanelOpen(false)} aria-label="Close" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17C6.23824 11.6851 11.4765 6.37022 16.7147 1.05532" stroke="#312725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.28526 1C6.52351 6.31489 11.7618 11.6298 17 16.9447" stroke="#312725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </Close>
          <SidePanelList>
            <li style={{ marginBottom: '24px' }}><StyledNavLink exact to="/">about</StyledNavLink></li>
            <li>
              photography
              <SidePanelInnerList>
                <li><StyledNavLink to="/photography/iceland">iceland</StyledNavLink></li>
                <li><StyledNavLink to="/photography/japan">japan</StyledNavLink></li>
                <li><StyledNavLink to="/photography/norway">norway</StyledNavLink></li>
                <li><StyledNavLink to="/photography/us">u.s.</StyledNavLink></li>
                <li><StyledNavLink to="/photography/portraits">portraits</StyledNavLink></li>
              </SidePanelInnerList>
            </li>
          </SidePanelList>
        </SidePanel>
      </>
    );
  }
  return (
    <FixedNav>
      <NavList>
        <NavListItem><StyledNavLink exact to="/">about</StyledNavLink></NavListItem>
        <NavListItem><StyledNavLink to="/photography">photography</StyledNavLink></NavListItem>
      </NavList>
    </FixedNav>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/photography">
          <Photography />
        </Route>
        <Route path="/">
          <Background>
            <Info>
              <InfoText>I am Jessica Wang, a software engineer and photographer.</InfoText>
              <Contact><ContactLink href="mailto:jssxwang@gmail.com" target="_blank" rel="noopener noreferrer">email</ContactLink></Contact>
              <Contact><ContactLink href="https://www.linkedin.com/in/jessicawang3" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink></Contact>
              <Contact><ContactLink href="https://www.instagram.com/jesswang.photo" target="_blank" rel="noopener noreferrer">Instagram</ContactLink></Contact>
            </Info>
          </Background>
        </Route>
      </Switch>
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1600px;
  background-image: url(${backgroundXs});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${breakpointXsMin}px) {
    background-image: url(${backgroundSm});
  }
  @media (min-width: ${breakpointSmMin}px) {
    background-image: url(${backgroundMd});
  }
  @media (min-width: ${breakpointMdMin}px) {
    background-image: url(${backgroundLg});
  }
`;
const HamburgerMenu = styled.svg`
  position: absolute;
  z-index: 1;
  top: 32px;
  right: 20px;
  cursor: pointer;
`;
const SidePanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999998;
  width: 320px;
  height: 100%;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease-out;
  transform: ${props => props.open ? 'translate(0, 0)' : 'translate(350px, 0)'};
`;
const Close = styled.svg`
  margin: 32px 20px 48px;
  cursor: pointer;
`;
const SidePanelList = styled.ul`
  list-style-type: none;
  margin-left: 80px;
`;
const SidePanelInnerList = styled.ul`
  margin: 24px 0 0 24px;

  li {
    line-height: 22px;
    margin-bottom: 8px;
  }
`;
const FixedNav = styled.ul`
  position: absolute;
  top: 0;
  z-index: 1;
  max-width: 1600px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  list-style-type: none;
`;
const NavList = styled.ul`
  margin: 40px 64px;
`;
const NavListItem = styled.li`
  display: inline-flex;
  margin-right: 42px;
`;
const BackgroundImage = styled.img`
  width: 100%;
`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 20px 32px;
  
  @media (min-width: ${breakpointMdMin}px) {
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
