import { useContext } from 'react';
import { PrismicContext } from '../../context/prismic.context';
import { Link } from 'react-scroll';

import { Title, HeroContainer, ArrowContainer, HeroImage } from './hero.styles';
import Logo from '../../assets/logo.png';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Hero = () => {
  const { title } = useContext(PrismicContext);

  return (
    <HeroContainer>
      <HeroImage src={Logo} width={250} alt='CharacterScope Logo' />
      <Title className={title[0].type}>{title[0].text}</Title>
      <ArrowContainer bottom>
        <Link to='leaders-container' smooth={true}>
          <Arrow />
        </Link>
      </ArrowContainer>
    </HeroContainer>
  );
};

export default Hero;
