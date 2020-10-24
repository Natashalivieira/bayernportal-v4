import styled from 'styled-components';
import { BiExitFullscreen } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`;

export const Nav2 = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavbarContainer2 = styled(Container)`
  display: flex;
  justify-content: center;
  height: 65px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #0099D5;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(BiExitFullscreen)`
  margin-right: 0.1rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: right;
  list-style: none;
  text-align: right;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 90px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #0099D5;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItem2 = styled.li`
  height: 57px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #fff;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #0099D5;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 2rem 0.5rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #0099D5;
      transition: all 0.3s ease;
    }
  }
`;

export const NavLinks2 = styled(Link)`
  color: #005D85;
  display: flex;
  text-align: right;
  text-decoration: none;
  padding: 2rem 2rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: right;
    padding: 0.1rem;
    width: 100%;
    display: table;
    &:hover {
      color: 'grey';
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;