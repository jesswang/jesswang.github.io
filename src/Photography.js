import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import styled from 'styled-components';
import { useMobileBreakpoint } from './useMobileBreakpoint';
import { StyledNavLink, breakpointSmMin, breakpointMdMin, breakpointLgMin } from './stylesUtils';
import img1 from './assets/photos/big-sur.jpg';
import img2 from './assets/photos/grad.jpg';
import img3 from './assets/photos/school.jpg';
import img4 from './assets/photos/house.jpg';
import img5 from './assets/photos/portrait.jpg';

export function Photography() {
  let match = useRouteMatch();
  const isMobile = useMobileBreakpoint();

  return (
    <ContentContainer>
      <Content>
        {/* {!isMobile && (
          <nav>
            <List>
              <li><StyledNavLink to={`${match.url}/us`}>u.s.</StyledNavLink></li>
            </List>
            <List style={{ marginTop: '20px' }}>
              <li><StyledNavLink to={`${match.url}/portraits`}>portraits</StyledNavLink></li>
            </List>
          </nav>
        )} */}
        <Switch>
          <Route path={`${match.path}`}>
            <PhotosContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={img1} key={img1} alt="Big Sur" /></ImgContainer>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={img2} key={img2} alt="Graduate" /></ImgContainer>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={img3} key={img3} alt="School" /></ImgContainer>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={img4} key={img4} alt="House" /></ImgContainer>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={img5} key={img5} alt="Portrait" /></ImgContainer>
              </PortraitPhotoContainer>
            </PhotosContainer>
          </Route>
        </Switch>
      </Content>
      {!useRouteMatch({ path: '/photography', exact: true }) && (
        <Footer>© {new Date().getFullYear()} Jessica Wang</Footer>
      )}
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  max-width: 1600px;
  margin: 90px auto 0;

  @media (min-width: ${breakpointMdMin}px) {
    margin: 120px auto 0;
  }
`;
const List = styled.ul`
  list-style-type: none;
  margin-left: 64px;
  line-height: 24px;
`;
const Content = styled.div`
  display: flex;
`;
const PhotosContainer = styled.div`
  width: 100%;
  margin: 0 20px 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300; 
  font-style: italic;

  @media (min-width: ${breakpointMdMin}px) {
    margin: 0 100px 16px;
  }
  @media (min-width: ${breakpointLgMin}px) {
    margin: 0 180px 16px;
  }
`;
const PhotosIndexContainer = styled.div`
  margin: 0 20px 20px;
  line-height: 24px;

  @media (min-width: ${breakpointMdMin}px) {
    margin: 0 180px 64px;
  }
  @media (min-width: ${breakpointLgMin}px) {
    margin: 0 300px 64px;
  }
`;
const PhotoContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: ${breakpointMdMin}px) {
    margin-bottom: 48px;
  }
`;
const PortraitPhotoContainer = styled.div`
  max-width: 500px;
  margin: 0 auto 20px;

  @media (min-width: ${breakpointMdMin}px) {
    margin: 0 auto 48px;
  }
`;
const ImgContainerWrapper = styled.div`
  margin: 0 auto 20px;
  max-width: none;

  @media (min-width: ${breakpointSmMin}px) {
    max-width: 600px;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  padding-bottom: ${props => props.height / props.width * 100}%;
`;
const Img = styled.img`
  position: absolute;
  width: 100%;
`;
const Caption = styled.p`
  margin-top: 8px;
  text-align: right;
  font-size: 14px;

  @media (min-width: ${breakpointSmMin}px) {
    font-size: 16px;
  }
`;
const Footer = styled.footer`
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
`;