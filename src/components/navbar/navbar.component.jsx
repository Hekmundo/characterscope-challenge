import { Link } from 'react-router-dom';

import HeaderLogo from '../../assets/header-logo.png';
import { LogoContainer, NavContainer, CompanyName } from './navbar.styles';

const Navbar = ({ dark }) => {
  return (
    <header>
      <NavContainer dark={dark}>
        <Link to='/'>
          <LogoContainer>
            <img src={HeaderLogo} alt='' />
            <CompanyName>CharacterScope</CompanyName>
          </LogoContainer>
        </Link>
      </NavContainer>
    </header>
  );
};

export default Navbar;
