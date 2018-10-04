import React from 'react';
import logo from '../assets/logo-symbol.svg';

const Header = () => {
    return(
        <div className="header-background">
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}

export default Header;