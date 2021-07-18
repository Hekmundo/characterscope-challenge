import { Link } from 'react-router-dom';

import HeaderLogo from '../../assets/header-logo.png';
import {
  LogoContainer,
  MenuButton,
  NavContainer,
  CompanyName,
  MenuRow,
} from './navbar.styles';

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
        <MenuButton>
          <MenuRow />
          <MenuRow />
          <MenuRow />
        </MenuButton>
      </NavContainer>
    </header>
  );
};

export default Navbar;
