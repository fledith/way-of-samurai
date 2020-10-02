import React from 'react';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import z from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.state.messages.map( m => <Message message={m.message} key={m.id} id={m.id} />);

    let onAddMessage = () => {
        props.sendMessage()
    } 
    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewDialogMessage(text);
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={z.dialogs}>
            <div className={z.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={z.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={onDialogChange} value={props.state.newDialogMessage} placeholder="Write a message..." />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;