// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import moon from '../../images/moon.svg';
import white from '../../images/white.svg';
import { Container } from 'components/App.styled';
import {
  HeaderBCG,
  BotomLine,
  NavFlexWrap,
  NavList,
  NavItem,
  NavBurger,
  ThemeBtn,
  ThemeIcon,
  Links,
  Logo,
  LogoWrap,
  LogoLeftPart,
} from './Header.styled';

// const LOCALSTORAGE_KEY = 'ui-theme';

export const Header = ({ toggleTheme, curentTheme }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    return setIsOpenMenu(!isOpenMenu);
  };

  // useEffect(() => {
  //   chekLocalStor();
  // }, []);

  return (
    <HeaderBCG>
      <BotomLine>
        <Container>
          <NavFlexWrap>
            <Logo to="/">
              <LogoWrap>
                <LogoLeftPart>Freelancer&thinsp;</LogoLeftPart>
                <li>portfolio</li>
              </LogoWrap>
            </Logo>
            <NavList className={isOpenMenu ? 'active' : ''}>
              <NavItem>
                <Links onClick={toggleMenu} to="/">
                  Home
                </Links>
              </NavItem>
              <NavItem>
                <Links onClick={toggleMenu} to="/projects">
                  Projects
                </Links>
              </NavItem>
              <NavItem>
                <Links onClick={toggleMenu} to="/skills">
                  Skills
                </Links>
              </NavItem>
              <NavItem>
                <Links onClick={toggleMenu} to="/contacts">
                  Contacts
                </Links>
              </NavItem>
            </NavList>
            <NavBurger
              onClick={toggleMenu}
              className={isOpenMenu ? 'active' : ''}
            >
              <span></span>
              <span></span>
              <span></span>
            </NavBurger>
            <ThemeBtn
              type="button"
              onClick={toggleTheme}
              curentTheme={curentTheme}
            >
              <ThemeIcon src={white} alt="" />
              <ThemeIcon src={moon} alt="" />
            </ThemeBtn>
          </NavFlexWrap>
        </Container>
      </BotomLine>
    </HeaderBCG>
  );
};
