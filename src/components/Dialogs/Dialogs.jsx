import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import z from './Dialogs.module.css';
import Message from './Message/Message';
import AddMessageFormRedux from './AddMessageForm'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.state.messages.map( m => <Message message={m.message} key={m.id} id={m.id} />);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    } 

    return (
        <div className={z.dialogs}>
            <div className={z.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={z.messages}>
                { messagesElements }
                <AddMessageFormRedux onSubmit={ addNewMessage } />
            </div>
        </div>
    )
}

export default Dialogs;