import Navbar from '../../components/navbar/navbar.component';
import Hero from '../../components/hero/hero.component';
import LeadersPreview from '../../components/leaders-preview/leader-preview.component';
import { HomePageContainer, NavAndHeroContainer } from './home-page.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavAndHeroContainer>
        <Navbar />
        <Hero />
      </NavAndHeroContainer>
      <LeadersPreview />
    </HomePageContainer>
  );
};

export default HomePage;
