import React from 'react';
import z from './Navbar.module.css';
import {NavLink} from  "react-router-dom"
// import profile from './../../img/profile.png'

const Navbar = () => {
    return (
        <nav className={z.nav}>
            <NavLink to="/profile" activeClassName={z.active}>
                <div className={z.item}>
                    {/* <img src={profile} alt="profile"/> */}
                    Profile
                </div>
            </NavLink>
            <NavLink to="/contact" activeClassName={z.active}>
                <div className={z.item}>
                    Contact
                </div>
            </NavLink>
            <NavLink to="/dialogs" activeClassName={z.active}>
                <div className={z.item}>
                    Messages
                </div>
            </NavLink>
            <NavLink to="/news" activeClassName={z.active}>
                <div className={z.item}>
                    News
                </div>
            </NavLink>
            <NavLink to="/music" activeClassName={z.active}>
                <div className={z.item}>
                    Music
                </div>
            </NavLink>
            <NavLink to="/settings" activeClassName={z.active}>
                <div className={z.item}>
                    Settings
                </div>
            </NavLink>
        </nav>
    );
}

export default Navbar;