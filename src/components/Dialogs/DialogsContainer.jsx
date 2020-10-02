import React from 'react';
import { connect } from 'react-redux';
import { updateNewDialogMessage, sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewDialogMessage})(Dialogs);

export default DialogsContainer;