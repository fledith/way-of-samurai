import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import FormControl from '../common/FormControls/FormsControls';


const Textarea = FormControl("textarea");

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Write a message..." />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageFrom"})(AddMessageForm);

export default AddMessageFormRedux;