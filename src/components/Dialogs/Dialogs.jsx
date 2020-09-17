import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import z from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} />);
    let newMessageElement = React.createRef();

    let AddMessage = () => {
        //props.sendMessage()
        props.dispatch({ type: 'SEND-MESSAGE' });
    } 
    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        //props.updateNewDialogMessage(text);
        props.dispatch({ type: 'UPDATE-NEW-DIALOG-MESSAGE', newText: text });
    }

    return (
        <div className={z.dialogs}>
            <div className={z.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={z.messages}>
                { messagesElements }
                <div>
                    <textarea ref={newMessageElement} onChange={onDialogChange} value={props.dialogsPage.newDialogMessage} placeholder="Write a message..." />
                </div>
                <div>
                    <button onClick={AddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;