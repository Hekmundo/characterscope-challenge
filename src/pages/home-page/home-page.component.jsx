import Navbar from '../../components/navbar/navbar.component';
import Hero from '../../components/hero/hero.component';
import LeadersPreview from '../../components/leaders-preview/leader-preview.component';
import { HomePageContainer, NavAndHeroContainer } from './home-page.styles';

const footerStyles = {
  textAlign: 'center',
  padding: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#777',
};

const footerLine = {
  height: '2px',
  width: '40px',
  display: 'tableCaption',
  backgroundColor: '#ddd',
  marginBottom: '10px',
  borderRadius: '2px',
};

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavAndHeroContainer>
        <Navbar />
        <Hero />
      </NavAndHeroContainer>
      <LeadersPreview />
      <div style={footerStyles}>
        <span style={footerLine}></span>
        <span>Created by Alex Hek</span>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
