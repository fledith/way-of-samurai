const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newDialogMessage,
            }; 
            if(state.newDialogMessage !== "") {
                state.messages.push(newMessage);
                state.newDialogMessage = "";
            }
            return state;
        case UPDATE_NEW_DIALOG_MESSAGE:
            state.newDialogMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewDialogMessageActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_MESSAGE, newText: text})

export default dialogsReducer;