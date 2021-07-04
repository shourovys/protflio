import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';
import { logoVariant } from '../animation/Animation';
import Nav from './Nav/Nav';
import './Navbar.css';
import { NavbarStyle } from './style';

const useStyles = NavbarStyle;

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()
  const location = useLocation()
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileMoreAnchorEl((mobileMoreAnchorEl)=>!mobileMoreAnchorEl);
  };

  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  

  return (
    <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar>
          <Typography className='nav-name' variant="h4" noWrap>
            <motion.img variants={logoVariant} initial='initial' animate='animate' src={logo} alt="" onClick={()=>history.push('/')} style={{cursor:'pointer'}}/>
            <motion.img variants={logoVariant} initial='initial' animate='animate' src={logo} alt="" onClick={()=>history.push('/')} style={{cursor:'pointer'}}/>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography 
              style={{borderBottom:location.pathname==='/' && '2px solid white'}} 
              variant="h6" 
              noWrap 
              className='top-nev' 
              onClick={()=>history.push('/')}
            >
                Home
            </Typography>
            <Typography 
              style={{borderBottom:location.pathname==='/projects' && '2px solid white'}} 
              variant="h6" 
              noWrap 
              className='top-nev' 
              onClick={()=>history.push('/projects')}
              >
                Projects
            </Typography>
            <Typography 
              style={{borderBottom:location.pathname==='/about' && '2px solid white'}} 
              variant="h6" 
              noWrap 
              className='top-nev' 
              onClick={()=>history.push('/about')}
              >
                About
            </Typography>
            <Typography 
              style={{borderBottom:location.pathname==='/contacts' && '2px solid white'}} 
              variant="h6" 
              noWrap 
              className='top-nev' 
              onClick={()=>history.push('/contacts')}
              >
                Contacts
            </Typography>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon /> 
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
      {
        isMobileMenuOpen && 
        <Nav mobileMoreAnchorEl={mobileMoreAnchorEl} mobileMenuId={mobileMenuId} isMobileMenuOpen={isMobileMenuOpen}  handleMobileMenuOpen={handleMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose}/>
      }

    </div>
  );
}