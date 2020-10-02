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

    let id = state.messages.length + 1;
    
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newDialogMessage;
            return {
                ...state,
                newDialogMessage: "",
                messages: [...state.messages, { id: id, message: newMessage}]
            }
        case UPDATE_NEW_DIALOG_MESSAGE:
            return {
                ...state,
                newDialogMessage: action.newText
            }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewDialogMessage = (text) => ({ type: UPDATE_NEW_DIALOG_MESSAGE, newText: text})

export default dialogsReducer;