import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
import { Menu, MenuListItem, StyledNavLink } from './stylesUtils';
import norwayImg1 from './assets/norway/norway-01.jpg';
import norwayImg2 from './assets/norway/norway-02.jpg';
import norwayImg3 from './assets/norway/norway-03.jpg';
import norwayImg4 from './assets/norway/norway-04.jpg';
import norwayImg5 from './assets/norway/norway-05.jpg';
import norwayImg6 from './assets/norway/norway-06.jpg';
import icelandImg1 from './assets/iceland/iceland-01.jpg';
import icelandImg2 from './assets/iceland/iceland-02.jpg';
import icelandImg3 from './assets/iceland/iceland-03.jpg';
import icelandImg4 from './assets/iceland/iceland-04.jpg';
import icelandImg5 from './assets/iceland/iceland-05.jpg';

export function Photography() {
  const match = useRouteMatch();

  return (
    <ContentContainer>
      <Menu>
        <MenuListItem><StyledNavLink exact to="/">about</StyledNavLink></MenuListItem>
        <MenuListItem><StyledNavLink to="/photography" selected>photography</StyledNavLink></MenuListItem>
      </Menu>
      <Content>
        <div>
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
        </div>
        <PhotosContainer>
          <Switch>
            <Route path={`${match.path}/us`}>
            </Route>
            <Route path={`${match.path}/japan`}>
            </Route>
            <Route path={`${match.path}/norway`}>
              <PhotoContainer>
                <Photo src={norwayImg1} alt="Munkebu hut in Lofoten" />
                <Caption>Reine, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <Photo src={norwayImg2} alt="House in grass in Vindstad" />
                <Caption>Vindstad, August 2019</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <Photo src={norwayImg3} alt="Village of Å in Lofoten" />
                <Caption>Å, August 2019</Caption>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <Photo src={norwayImg4} alt="Lake along Ryten trail in Lofoten" />
                <Caption>Ryten, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <Photo src={norwayImg5} alt="Cliff overlooking beach at Ryten in Lofoten" />
                <Caption>Ryten, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <Photo src={norwayImg6} alt="House in Reine" />
                <Caption>Reine, August 2019</Caption>
              </PhotoContainer>
            </Route>
            <Route path={`${match.path}/china`}>
            </Route>
            <Route path={`${match.path}/iceland`}>
              <PhotoContainer>
                <Photo src={icelandImg1} alt="View of Stykkishólmur" />
                <Caption>Stykkishólmur, March 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <Photo src={icelandImg2} alt="Horses grazing" />
                <Caption>Vík, March 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <Photo src={icelandImg3} alt="Black church of Búðir" />
                <Caption>Búðir, March 2019</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <Photo src={icelandImg4} alt="Skógafoss waterfall" />
                <Caption>Skógafoss, March 2019</Caption>
              </PortraitPhotoContainer>
              <PortraitPhotoContainer>
                <Photo src={icelandImg5} alt="Gljúfrabúi waterfall" />
                <Caption>Gljúfrabúi, March 2019</Caption>
              </PortraitPhotoContainer>
            </Route>
          </Switch>
        </PhotosContainer>
      </Content>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  max-width: 1600px;
  margin: auto;
`;
const List = styled.ul`
  list-style-type: none;
  margin-left: 64px;
  line-height: 22px;
`;
const Content = styled.div`
  display: flex;
`;
const PhotosContainer = styled.div`
  margin: 0 180px 16px;
  font-family: 'Roboto', sans-serif;
`;
const PhotoContainer = styled.div`
  margin-bottom: 48px;
`;
const PortraitPhotoContainer = styled.div`
  max-width: 500px;
  margin: 0 auto 48px;
`;
const Photo = styled.img`
  width: 100%;
`;
const Caption = styled.p`
  margin-top: 8px;
  text-align: right;
`;