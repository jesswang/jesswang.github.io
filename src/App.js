import styled from 'styled-components';
import backgroundXs from "./background-xs.jpg";
import backgroundSm from "./background-sm.jpg";
import backgroundMd from "./background-md.jpg";
import backgroundLg from "./background-lg.jpg";
import { breakpointSmMin, breakpointMdMin, breakpointLgMin, bodyTextColor } from './stylesUtils';

function App() {

  return (
    <AppContainer>
      <Menu>
        <ListItem>about</ListItem>
        <ListItem>photography</ListItem>
      </Menu>
      <Info>
        <InfoText>I am Jessica Wang, a software engineer and photographer.</InfoText>
        <Contact><ContactLink href="mailto:jssxwang@gmail.com" target="_blank" rel="noopener noreferrer">Email</ContactLink></Contact>
        <Contact><ContactLink href="https://www.linkedin.com/in/jessicawang3" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink></Contact>
        <Contact><ContactLink href="https://www.instagram.com/jesswang.photo" target="_blank" rel="noopener noreferrer">Instagram</ContactLink></Contact>
      </Info>
    </AppContainer>
  );
}

const opacityGradient = 'linear-gradient(rgba(255,255,255, 0.2), rgba(255,255,255, 0.2))';

const AppContainer = styled.div`
  font-size: 16px;
  background: ${opacityGradient}, url(${backgroundXs}) no-repeat left top/cover;
  height: 100vh;

  @media (min-width: ${breakpointSmMin}px) {
    background: ${opacityGradient}, url(${backgroundSm}) no-repeat left top/cover;
  }
  @media (min-width: ${breakpointMdMin}px) {
    background: ${opacityGradient}, url(${backgroundMd}) no-repeat left top/cover;
  }
  @media (min-width: ${breakpointLgMin}px) {
    background: ${opacityGradient}, url(${backgroundLg}) no-repeat left top/cover;
  }
`;
const Menu = styled.ul`
  position: absolute;
  top: 0;
  list-style-type: none;
  margin: 32px 20px;

  @media (min-width: ${breakpointSmMin}px) {
    margin: 40px 64px;
  }
`;
const ListItem = styled.li`
  display: inline-flex;
  margin-right: 42px;
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
