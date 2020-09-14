import React from 'react';
import z from'./Navbar.module.css';
import {NavLink} from  "react-router-dom"

const Navbar = () => {
    return (
        <nav className={z.nav}>
            <div className={z.item}>
                <NavLink to="/profile" activeClassName={z.active}>Profile</NavLink>
            </div>
            <div className={z.item}>
                <NavLink to="/dialogs" activeClassName={z.active}>Messages</NavLink> 
            </div>
            <div className={z.item}>
                <NavLink to="/news" activeClassName={z.active}>News</NavLink>
            </div>
            <div className={z.item}>
                <NavLink to="/music" activeClassName={z.active}>Music</NavLink>
            </div><br />
            <div className={z.item}> 
                <NavLink to="/settings" activeClassName={z.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;