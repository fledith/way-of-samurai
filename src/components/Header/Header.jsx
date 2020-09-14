import React from 'react';
import logo from './../../img/logo.png';
import z from './Header.module.css';


const Header = () => {
    return (
        <header className={z.header}>
            <a href="#s">
                <img src={logo} alt='logo'/>
            </a>
        </header>
    );
}

export default Header;