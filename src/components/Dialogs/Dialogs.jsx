import React from 'react';
import { NavLink } from 'react-router-dom';
import z from './Dialogs.module.css';

const DialogItem = (props) => {
    
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={z.dialog + ' ' + z.active}>
            <NavLink to={path}>{props.name}</NavLink>  
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={z.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    
    let dialogs = [
        {id: 1, name: "Dimych"}, 
        {id: 2, name: "Zekich"}, 
        {id: 3, name: "Viktor"}, 
        {id: 4, name: "Alice"}, 
        {id: 5, name: "Volodka"}, 
        {id: 6, name: "Valentin"}, 
        {id: 7, name: "Maks"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hru?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Hi bro"},
        {id: 5, message: "Yeah"},
        {id: 6, message: "???"},
        {id: 7, message: "Not today!"}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} />);

    return (
        <div className={z.dialogs}>
            <div className={z.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={z.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;