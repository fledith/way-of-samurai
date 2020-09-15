import React from 'react';
import { NavLink } from 'react-router-dom';
import z from './DialogItem.module.css';

const DialogItem = (props) => {
    
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={z.dialog + ' ' + z.active}>
            <NavLink to={path}>{props.name}</NavLink>  
        </div>
    )
}

export default DialogItem;