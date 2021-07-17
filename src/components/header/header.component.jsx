import { useContext } from 'react';
import { PrismicContext } from '../../context/prismic.context';
import { Link } from 'react-scroll';

import { ArrowContainer } from '../../global.styles';
import { Title, HeaderContainer } from './header.styles';
import Logo from '../../assets/logo.png';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Header = () => {
  const { title } = useContext(PrismicContext);

  return (
    <HeaderContainer id='header'>
      <img src={Logo} width={250} alt='CharacterScope Logo' />
      <Title className={title[0].type}>{title[0].text}</Title>
      <ArrowContainer bottom>
        <Link to='leaders-container' smooth={true}>
          <Arrow />
        </Link>
      </ArrowContainer>
    </HeaderContainer>
  );
};

export default Header;
