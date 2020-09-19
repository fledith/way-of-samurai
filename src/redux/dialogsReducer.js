const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"}, 
        {id: 2, name: "Zekich"}, 
        {id: 3, name: "Viktor"}, 
        {id: 4, name: "Alice"}, 
        {id: 5, name: "Volodka"}, 
        {id: 6, name: "Valentin"}, 
        {id: 7, name: "Maks"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hru?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Hi bro"},
        {id: 5, message: "Yeah"},
        {id: 6, message: "???"},
        {id: 7, message: "Not today!"}
    ],
    newDialogMessage: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newDialogMessage,
            }; 
            if(state.newDialogMessage !== "") {
                state.messages.push(newMessage);
            }
            state.newDialogMessage = "";
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