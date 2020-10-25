import React, { useState, useEffect } from 'react';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ForumIcon from '@material-ui/icons/Forum';
import { IconContext } from 'react-icons/lib';
import { fade, makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../../Images/Logo.jpg';
import TextField from '@material-ui/core/TextField';

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

const useStyles = makeStyles((theme) => ({
    
    root2: {
      '& > *': {
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(2),
        // marginRight: theme.spacing(1),
        // marginTop: theme.spacing(1),
        // width: '40ch',
        width: '15ch',
        // [theme.breakpoints.up('md')]: {
        //   // width: '100%',
        //   width: '15ch',
        // },
      },
    },
  
  }))


function Navbar() {

  const classes = useStyles();

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
              <NavIcon />
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

      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img width="60px" src={Logo}/>
              <NavIcon />
              BayernPortal
            </NavLogo>

            <NavMenu>
              {/* <NavItem>
                <NavLinks2>
                  <ForumIcon fontSize="small"/>BayernForum
                </NavLinks2>
              </NavItem> */}
              <NavItem>
                <NavLinks2>
                {/* BayernID Login<ExitToAppIcon fontSize="small"/> */}
                  <form className={classes.root2} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="BayernID Login" variant="outlined" size="small" />
                    <ExitToAppIcon fontSize="small"/>
                  </form>
                </NavLinks2>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>     
    </>
  );
}

export default Navbar;