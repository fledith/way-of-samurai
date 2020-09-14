import React from 'react';
import z from'./Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={z.nav}>
            <div className={z.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={z.item}>
                <a href="/dialogs">Messages</a> 
            </div>
            <div className={z.item}>
                <a href="/news">News</a>
            </div>
            <div className={z.item}>
                <a href="/music">Music</a>
            </div><br />
            <div className={z.item}> 
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;