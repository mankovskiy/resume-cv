// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  NavBurgerBar,
  ThemeBtn,
  ThemeIcon,
  Links,
  Logo,
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
              <LogoLeftPart>Freelancer </LogoLeftPart>
              portfolio
            </Logo>
            <NavList className={isOpenMenu ? 'active' : ''}>
              <NavItem>
                <Links to="/">Home</Links>
              </NavItem>
              <NavItem>
                <Links to="/projects">Projects</Links>
              </NavItem>
              <NavItem>
                <Links to="/skills">Skills</Links>
              </NavItem>
              <NavItem>
                <Links to="/contacts">Contacts</Links>
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
