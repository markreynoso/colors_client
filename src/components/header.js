import React from 'react';
import logo from '../assets/logo-symbol.svg';
import Search from './search';

const Header = (props) => {
    return(
        <div className="header-background">
            <img src={logo} className="logo" alt="logo" />
            <Search 
                searchName={props.searchName}
                handleInput={props.handleInput} 
                handleSubmit={props.handleSubmit}
            />
        </div>
    )
}

export default Header;