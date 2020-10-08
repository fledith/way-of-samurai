import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, }),
    withAuthRedirect
)(Dialogs);