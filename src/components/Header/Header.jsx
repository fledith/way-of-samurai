import React from 'react';
import logo from './../../img/logo.jpg';
import z from './Header.module.css';


const Header = () => {
    return (
        <header className={z.header}>
            <img src={logo} alt='logo'/>
        </header>
    );
}

export default Header;