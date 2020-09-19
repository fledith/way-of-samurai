import React from 'react';
import { updateNewDialogMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    } 
    let onDialogChange = (text) => {
        let action = updateNewDialogMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs state={state} sendMessage={addMessage} updateNewDialogMessage={onDialogChange} />
    )
}

export default DialogsContainer;