// import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
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

export const Header = ({ toggleTheme }) => {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  const onClickHamburgerMenu = () => {};

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
            <NavList>
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
            <NavBurger onClick={onClickHamburgerMenu}>
              <NavBurgerBar></NavBurgerBar>
              <NavBurgerBar></NavBurgerBar>
              <NavBurgerBar></NavBurgerBar>
            </NavBurger>
            <ThemeBtn type="button" onClick={toggleTheme}>
              <ThemeIcon src={white} alt="" />
              <ThemeIcon src={moon} alt="" />
            </ThemeBtn>
          </NavFlexWrap>
        </Container>
      </BotomLine>
    </HeaderBCG>
  );
};
