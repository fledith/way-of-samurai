const SEND_MESSAGE = "SEND-MESSAGE";

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
}


const dialogsReducer = (state = initialState, action) => {

    let id = state.messages.length + 1;
    
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: id, message: newMessage}]
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;