import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../img/logo_new.png';
import z from './Header.module.css';


const Header = () => {
    return (
        <header className={z.header}>
            <NavLink to="/profile">
                <img src={logo} alt='logo'/>
            </NavLink>
        </header>
    );
}

export default Header;