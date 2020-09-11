import React from 'react';
import logo from './../img/logo.jpg';
import './../App.css';


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt='logo'/>
        </header>
    );
}

export default Header;