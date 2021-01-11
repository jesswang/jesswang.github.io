import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import styled from 'styled-components';
import { useMobileBreakpoint } from './useMobileBreakpoint';
import { StyledNavLink, breakpointSmMin, breakpointMdMin, breakpointLgMin } from './stylesUtils';
import icelandImg1 from './assets/iceland/iceland-01.jpg';
import icelandImg2 from './assets/iceland/iceland-02.jpg';
import icelandImg3 from './assets/iceland/iceland-03.jpg';
import icelandImg4 from './assets/iceland/iceland-04.jpg';
import icelandImg5 from './assets/iceland/iceland-05.jpg';
import japanImg1 from './assets/japan/japan-01.jpg';
import japanImg2 from './assets/japan/japan-02.jpg';
import japanImg3 from './assets/japan/japan-03.jpg';
import japanImg4 from './assets/japan/japan-04.jpg';
import japanImg5 from './assets/japan/japan-05.jpg';
import norwayImg1 from './assets/norway/norway-01.jpg';
import norwayImg2 from './assets/norway/norway-02.jpg';
import norwayImg3 from './assets/norway/norway-03.jpg';
import norwayImg4 from './assets/norway/norway-04.jpg';
import norwayImg5 from './assets/norway/norway-05.jpg';
import norwayImg6 from './assets/norway/norway-06.jpg';
import usImg1 from './assets/us/us-01.jpg';
import usImg2 from './assets/us/us-02.jpg';
import usImg3 from './assets/us/us-03.jpg';
import usImg4 from './assets/us/us-04.jpg';
import usImg5 from './assets/us/us-05.jpg';
import usImg6 from './assets/us/us-06.jpg';
import usImg7 from './assets/us/us-07.jpg';
import portraitImg1 from './assets/portraits/portrait-01.jpg';
import portraitImg2 from './assets/portraits/portrait-02.jpg';
import portraitImg3 from './assets/portraits/portrait-03.jpg';
import portraitImg4 from './assets/portraits/portrait-04.jpg';

export function Photography() {
  let match = useRouteMatch();
  const isMobile = useMobileBreakpoint();

  return (
    <ContentContainer>
      <Content>
        {!isMobile && (
          <div>
            <List>
              <li><StyledNavLink to={`${match.url}/iceland`}>iceland</StyledNavLink></li>
              <li><StyledNavLink to={`${match.url}/japan`}>japan</StyledNavLink></li>
              <li><StyledNavLink to={`${match.url}/norway`}>norway</StyledNavLink></li>
              <li><StyledNavLink to={`${match.url}/us`}>u.s.</StyledNavLink></li>
            </List>
            <List style={{ marginTop: '20px' }}>
              <li><StyledNavLink to={`${match.url}/portraits`}>portraits</StyledNavLink></li>
            </List>
          </div>
        )}
        <Switch>
          <Route path={`${match.path}/iceland`}>
            <PhotosContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1091}><Img src={icelandImg1} key={icelandImg1} alt="Horses grazing" /></ImgContainer>
                <Caption>Vík, March 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={icelandImg2} key={icelandImg2} alt="Black church of Búðir" /></ImgContainer>
                <Caption>Búðir, March 2019</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={704} height={1061}><Img src={icelandImg3} key={icelandImg3} alt="Skógafoss waterfall" /></ImgContainer>
                <Caption>Skógafoss, March 2019</Caption>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={icelandImg4} key={icelandImg4} alt="View of Stykkishólmur" /></ImgContainer>
                <Caption>Stykkishólmur, March 2019</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={icelandImg5} key={icelandImg5} alt="Gljúfrabúi waterfall" /></ImgContainer>
                <Caption>Gljúfrabúi, March 2019</Caption>
              </PortraitPhotoContainer>
            </PhotosContainer>
          </Route>
          <Route path={`${match.path}/japan`}>
            <PhotosContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1060}><Img src={japanImg1} key={japanImg1} alt="Biker in Osaka" /></ImgContainer>
                <Caption>Osaka, January 2018</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1060}><Img src={japanImg2} key={japanImg2} alt="Guests feeding monkeys at Iwatayama Monkey Park" /></ImgContainer>
                <Caption>Arashiyama, January 2018</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1081}><Img src={japanImg3} key={japanImg3} alt="Visitors at Sensō-ji temple" /></ImgContainer>
                <Caption>Asakusa, December 2015</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1081}><Img src={japanImg4} key={japanImg4} alt="Tsukiji fish market" /></ImgContainer>
                <Caption>Tsukiji, December 2015</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1081}><Img src={japanImg5} key={japanImg5} alt="Man with poodle and shopper at Tsukiji fish market" /></ImgContainer>
                <Caption>Tsukiji, December 2015</Caption>
              </PhotoContainer>
            </PhotosContainer>
          </Route>
          <Route path={`${match.path}/norway`}>
            <PhotosContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={norwayImg1} key={norwayImg1} alt="Munkebu hut in Lofoten" /></ImgContainer>
                <Caption>Reine, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={norwayImg2} key={norwayImg2} alt="House in grass in Vindstad" /></ImgContainer>
                <Caption>Vindstad, August 2019</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={norwayImg3} key={norwayImg3} alt="Village of Å in Lofoten" /></ImgContainer>
                <Caption>Å, August 2019</Caption>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={norwayImg4} key={norwayImg4} alt="Lake along Ryten trail in Lofoten" /></ImgContainer>
                <Caption>Ryten, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={norwayImg5} key={norwayImg5} alt="Cliff overlooking beach at Ryten in Lofoten" /></ImgContainer>
                <Caption>Ryten, August 2019</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={norwayImg6} key={norwayImg6} alt="House in Reine" /></ImgContainer>
                <Caption>Reine, August 2019</Caption>
              </PhotoContainer>
            </PhotosContainer>
          </Route>
          <Route path={`${match.path}/us`}>
            <PhotosContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={usImg1} key={usImg1} alt="Fog covering the ocean at Big Sur" /></ImgContainer>
                <Caption>Big Sur, May 2018</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={usImg2} key={usImg2} alt="Tourists at Badwater Basin in Death Valley National Park" /></ImgContainer>
                <Caption>Death Valley, March 2016</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1081}><Img src={usImg3} key={usImg3} alt="Street art in Astoria, Queens" /></ImgContainer>
                <Caption>Astoria, June 2016</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={usImg4} key={usImg4} alt="Franconia Ridge Loop" /></ImgContainer>
                <Caption>Mount Lafayette, October 2020</Caption>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={usImg5} key={usImg5} alt="Duke University commencement" /></ImgContainer>
                <Caption>Duke University, May 2019</Caption>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={usImg6} key={usImg6} alt="Restaurant guests in San Diego" /></ImgContainer>
                <Caption>San Diego, April 2016</Caption>
              </PhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1600} height={1061}><Img src={usImg7} key={usImg7} alt="Restaurant window in NYC" /></ImgContainer>
                <Caption>Manhattan, February 2020</Caption>
              </PhotoContainer>
            </PhotosContainer>
          </Route>
          <Route path={`${match.path}/portraits`}>
            <PhotosContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1024} height={1545}><Img src={portraitImg1} key={portraitImg1} alt="" /></ImgContainer>
              </PortraitPhotoContainer>
              <PhotoContainer>
                <ImgContainer width={1545} height={1024}><Img src={portraitImg2} key={portraitImg2} alt="" /></ImgContainer>
              </PhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={portraitImg3} key={portraitImg3} alt="" /></ImgContainer>
              </PortraitPhotoContainer>
              <PortraitPhotoContainer>
                <ImgContainer width={1061} height={1600}><Img src={portraitImg4} key={portraitImg4} alt="" /></ImgContainer>
              </PortraitPhotoContainer>
            </PhotosContainer>
          </Route>
          <Route path={`${match.path}`}>
            <PhotosIndexContainer>
              All of my photography featured here was taken on 35 mm film, which has been my preferred medium since I first started photography as a teenager. My subject matter normally covers scenes from my travel and daily life with my friends and family.
            </PhotosIndexContainer>
          </Route>
        </Switch>
      </Content>
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
  line-height: 22px;
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
  margin: 0 20px 16px;
  line-height: 24px;

  @media (min-width: ${breakpointMdMin}px) {
    margin: 0 180px 16px;
  }
  @media (min-width: ${breakpointLgMin}px) {
    margin: 0 300px 16px;
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