import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import z from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id} />);

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