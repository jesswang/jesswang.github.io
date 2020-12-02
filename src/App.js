import styled from 'styled-components';
import backgroundXs from "./background-xs.jpg";
import backgroundSm from "./background-sm.jpg";
import backgroundMd from "./background-md.jpg";
import backgroundLg from "./background-lg.jpg";

function App() {

  return (
    <AppContainer>
      <Menu>
        <ListItem>about</ListItem>
        <ListItem>photography</ListItem>
      </Menu>
      <Info>
        <InfoText>I am Jessica Wang, a software engineer and photographer.</InfoText>
        <Contact><a href="#" target="_blank" rel="noopener noreferrer">Email</a></Contact>
        <Contact><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></Contact>
        <Contact><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></Contact>
      </Info>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-size: 16px;
  background: url(${backgroundXs});
  height: 100vh;

  @media (min-width: 480px) {
    background-image: url(${backgroundSm});
  }
  @media (min-width: 768px) {
    background-image: url(${backgroundMd});
  }
  @media (min-width: 1280px) {
    background-image: url(${backgroundLg});
  }
`;
const Menu = styled.ul`
  position: fixed;
  top: 0;
  padding: 0;
  margin: 40px 0 40px 64px;
  list-style-type: none;
`;
const ListItem = styled.li`
  display: inline-flex;
  margin-right: 42px;
`;
const Info = styled.div`
  position: fixed;
  bottom: 0;
  margin: 64px;
`;
const InfoText = styled.p`
  margin-bottom: 24px;
  line-height: 18px;
`;
const Contact = styled.div`
  line-height: 22px;
`;

export default App;
