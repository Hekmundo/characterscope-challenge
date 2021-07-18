import Navbar from '../../components/navbar/navbar.component';
import Hero from '../../components/hero/hero.component';
import LeadersPreview from '../../components/leaders-preview/leader-preview.component';
import Footer from '../../components/footer/footer.component';
import { NavAndHeroContainer } from './home-page.styles';

const HomePage = () => {
  return (
    <>
      <NavAndHeroContainer>
        <Navbar />
        <Hero />
      </NavAndHeroContainer>
      <LeadersPreview />
      <Footer />
    </>
  );
};

export default HomePage;
