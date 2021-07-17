import HeaderLogo from '../../assets/header-logo.png';
import {
  LogoContainer,
  MenuButton,
  NavContainer,
  CompanyName,
  MenuRow,
} from './navbar.styles';

const Navbar = () => {
  return (
    <header>
      <NavContainer>
        <LogoContainer>
          <img src={HeaderLogo} alt='' />
          <CompanyName>CharacterScope</CompanyName>
        </LogoContainer>
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
