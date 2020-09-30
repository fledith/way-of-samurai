import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../img/logo_new2.png';
import z from './Header.module.css';


const Header = (props) => {
    return (
        <header className={z.header}>
            <div className={z.logo}>
                <NavLink to="/profile">
                    <img src={logo} alt='logo'/>
                </NavLink>
            </div>
            <div className={z.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    );
}

export default Header;