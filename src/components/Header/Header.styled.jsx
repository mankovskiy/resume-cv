import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBCG = styled.header`
  background-color: ${({ theme }) => theme.colors.darkMainColor};
  width: 100%;
  position: fixed;
`;

export const BotomLine = styled.div`
  border-bottom: 1px solid #26292d;
  letter-spacing: normal;
`;

export const Logo = styled(NavLink)`
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1;
`;
export const LogoLeftPart = styled.span`
  font-weight: 700;
`;

export const NavFlexWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: var(--dark-bg-color-text);
    width: 100%;
    text-align: center;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    left: 0;
  }
`;

export const NavItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin: 16px 0;
    padding: 0;
  }
`;

export const Links = styled(NavLink)`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
  &.active::after {
    @media screen and (min-width: 769px) {
      content: '';
      border-radius: 2px;
      position: absolute;
      margin-top: 4px;
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const NavBurger = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${({ theme }) => theme.colors.whiteColor};
  }
  &.active {
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(1) {
      transform: translateY(8px) rotate(45deg);
    }
    span:nth-of-type(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

// export const NavBurgerBar = styled.span`
//   display: block;
//   width: 25px;
//   height: 3px;
//   margin: 5px auto;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   background-color: ${({ theme }) => theme.colors.whiteColor};
// `;

export const ThemeBtn = styled.button`
  margin-left: 15px;
  display: flex;
  position: relative;
  width: 51px;
  height: 26px;
  background-color: #272727;
  border-radius: 50px;
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    display: block;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &::before {
    transform: ${({ curentTheme }) =>
      curentTheme === 'light' ? 'translateX(0)' : 'translateX(26px)'};
    /* transform: translateX(26px); */
  }
`;

export const ThemeIcon = styled.img`
  position: relative;
  padding: 5px;
`;
