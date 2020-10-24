import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconContext } from 'react-icons/lib';
import { fade, makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../Images/Logo.jpg';

// import { Button } from '../../globalStyles';
import {
  Nav,
  Nav2,
  NavbarContainer,
  NavbarContainer2,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItem2,
  NavItemBtn,
  NavLinks,
  NavLinks2,
  NavBtnLink
} from './Navbar.elements';



function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img width="60px" src={Logo}/>
              <NavIcon />
              BayernPortal
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks>
                  <BrightnessMediumIcon fontSize="small"/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <FormatSizeIcon fontSize="small"/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <VolumeUpIcon fontSize="small"/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <VisibilityOffIcon fontSize="small"/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <GTranslateIcon fontSize="small"/>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider> 

      {/* <IconContext.Provider value={{ color: '#fff' }}>
        <Nav2>
          <NavbarContainer2>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem2>
                <NavLinks2 to='/' onClick={closeMobileMenu}>
                    BayernForum
                </NavLinks2>
              </NavItem2>
              <NavItem2>
                <NavLinks2 to='/' onClick={closeMobileMenu}>
                  BayernID Login
                </NavLinks2>
              </NavItem2>
            </NavMenu>
          </NavbarContainer2>
        </Nav2>
      </IconContext.Provider>         */}
    </>
  );
}

export default Navbar;