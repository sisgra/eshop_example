import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.styles.css';

const Navbar=()=>(
    <div className='navbar'>
        <Link className='logo-container' to='/'>
            LOGO
        </Link>
        <div className="options">
        <Link className='option' to='/shop'>
            SHOP    
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
    </div>
    </div>
);

export default Navbar;