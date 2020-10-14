import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import logo from './../../img/logo_new2.png';
import z from './Header.module.css';
import logout from '../../img/logout.png';


const Header = (props) => {
    return (
        <header className={z.header}>
            <div className={z.logo}>
                <NavLink to="/profile">
                    <center>
                        <img src={logo} alt='logo'/>
                    </center>
                </NavLink>
            </div>
            <div className={z.center}>

            </div>
            <div className={z.loginBlock}>
                { props.isAuth 
                    ? <>{props.login} <input type="image" title="log out" src={logout} onClick={props.logout} /></>
                    : <><Redirect to={"/login"} /><NavLink to={'/login'}> Login </NavLink></>}
            </div>
        </header>
    );
}

export default Header;