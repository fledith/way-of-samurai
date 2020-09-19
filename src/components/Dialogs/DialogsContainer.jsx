import React from 'react';
import { updateNewDialogMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    let addMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    } 
                    let onDialogChange = (text) => {
                        let action = updateNewDialogMessageActionCreator(text);
                        store.dispatch(action);
                    }

                    return <Dialogs state={state} sendMessage={addMessage} updateNewDialogMessage={onDialogChange} />
                }
            }
        </StoreContext.Consumer>
        
    )
}

export default DialogsContainer;