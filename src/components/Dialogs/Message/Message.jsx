import React from 'react';
import z from './Message.module.css';


const Message = (props) => {
    return (
        <div className={z.dialog}>{props.message}</div>
    )
}

export default Message;