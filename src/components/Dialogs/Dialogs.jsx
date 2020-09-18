import React from 'react';
import { updateNewDialogMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import z from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} />);
    let newDialogMessage = props.dialogsPage.newDialogMessage;

    let AddMessage = () => {
        //props.sendMessage()
        //props.dispatch({ type: 'SEND-MESSAGE' });
        props.dispatch(sendMessageActionCreator());
    } 
    let onDialogChange = (e) => {
        let text = e.target.value;
        //props.updateNewDialogMessage(text);
        //props.dispatch({ type: 'UPDATE-NEW-DIALOG-MESSAGE', newText: text });
        let action = updateNewDialogMessageActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={z.dialogs}>
            <div className={z.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={z.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={onDialogChange} value={newDialogMessage} placeholder="Write a message..." />
                </div>
                <div>
                    <button onClick={AddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;