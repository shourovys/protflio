import React from 'react';
import './Nav.css';



const Nav = (
    {mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen,  handleMobileMenuClose,}
    ) => {
    return (
        <ul
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className='nav-item-container'
            // style={{display:isMobileMenuOpen?'block':'none'}}
            >
            <li onClick={handleMobileMenuClose} className="nav-item">Home</li>
            <li onClick={handleMobileMenuClose} className="nav-item">Products</li>
            <li onClick={handleMobileMenuClose} className="nav-item">About</li>
            <li onClick={handleMobileMenuClose} className="nav-item">Contact</li>
        </ul>
    );
};

export default Nav;
