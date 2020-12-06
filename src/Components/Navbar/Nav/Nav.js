import { motion } from 'framer-motion';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { liVariant } from '../../animation/Animation';
import './Nav.css';



const Nav = (
    {mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen,  handleMobileMenuClose,}
    ) => {
        const location=useLocation()
        const history=useHistory()
        const handel=(path)=>{
            history.push(path) 
            handleMobileMenuClose()
        }
    return (
        <motion.ul
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className='nav-item-container'
    
            >
            <motion.li 
                variants={liVariant} 
                whileHover='whileHover' 
                className="nav-item"     
                onClick={()=>handel('/')}
                style={{color:location.pathname==='/' && 'blue'}} 
             >Home
             </motion.li>
            <motion.li 
                variants={liVariant} 
                whileHover='whileHover' 
                className="nav-item"             
                onClick={()=>handel('/projects')}
                style={{color:location.pathname==='/projects' && 'blue'}} 
             >Products
             </motion.li>
            <motion.li 
                variants={liVariant} 
                whileHover='whileHover' 
                className="nav-item"          
                onClick={()=>handel('/about')}
                style={{color:location.pathname==='/about' && 'blue'}} 
             >About
             </motion.li>
            <motion.li 
                variants={liVariant} 
                whileHover='whileHover' 
                className="nav-item"             
                onClick={()=>handel('/contacts') }
                style={{color:location.pathname==='/contacts' && 'blue'}} 
             >Contact
             </motion.li>
        </motion.ul>

    );
};

export default Nav;
