import { 
  useState,
  useEffect,
  useMemo,
} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { Photography } from './Photography';
import backgroundXs from './assets/background-xs.jpg';
import backgroundSm from './assets/background-sm.jpg';
import backgroundMd from './assets/background-md.jpg';
import backgroundLg from './assets/background-lg.jpg';
import { 
  breakpointXsMin,
  breakpointSmMin,
  breakpointMdMin,
  breakpointLgMin,
  bodyTextColor,
  StyledNavLink,
} from './stylesUtils';

function Nav() {
  const mediaQuery = useMemo(() => window.matchMedia(`(min-width: ${breakpointMdMin}px)`), []);
  const [isMobile, setIsMobile] = useState(!mediaQuery.matches);

  useEffect(() => {
    mediaQuery.addEventListener('change', handleMediaQuery);

    return () => mediaQuery.removeEventListener('change', handleMediaQuery);
  }, [mediaQuery]);

  const handleMediaQuery = (e) => {
    e.matches ? setIsMobile(false) : setIsMobile(true);
  };
  
  if (isMobile) {
    return (
      <HamburgerMenu>
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9C9 9 17 9 25 9" stroke="#3A2E2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 1C9 1 17 1 25 1" stroke="#3A2E2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 17C9 17 17 17 25 17" stroke="#3A2E2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </HamburgerMenu>
    );
  }
  return (
    <FixedNav>
      <NavListItem><StyledNavLink exact to="/">about</StyledNavLink></NavListItem>
      <NavListItem><StyledNavLink to="/photography">photography</StyledNavLink></NavListItem>
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
          <ContentContainer>
            <picture>
              <source media={`(min-width: ${breakpointLgMin}px`} srcSet={backgroundLg} />
              <source media={`(min-width: ${breakpointSmMin}px`} srcSet={backgroundMd} />
              <source media={`(min-width: ${breakpointXsMin}px`} srcSet={backgroundSm} />
              <BackgroundImage src={backgroundXs} alt="" />
            </picture>
            <Info>
              <InfoText>I am Jessica Wang, a software engineer and photographer.</InfoText>
              <Contact><ContactLink href="mailto:jssxwang@gmail.com" target="_blank" rel="noopener noreferrer">email</ContactLink></Contact>
              <Contact><ContactLink href="https://www.linkedin.com/in/jessicawang3" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink></Contact>
              <Contact><ContactLink href="https://www.instagram.com/jesswang.photo" target="_blank" rel="noopener noreferrer">Instagram</ContactLink></Contact>
            </Info>
          </ContentContainer>
        </Route>
      </Switch>
    </>
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
const HamburgerMenu = styled.div`
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 32px;
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
  
  @media (min-width: ${breakpointSmMin}px) {
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
