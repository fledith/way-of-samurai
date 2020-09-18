const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 58},
                {id: 2, message: "It's my first post", likesCount: 137},
                {id: 3, message: "Kek, lol, azaza", likesCount: 3},
                {id: 4, message: "Hi, from future", likesCount: 20},
                {id: 5, message: "What's going on?", likesCount: 43}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },      
    subscribe(observer) {
    this._callSubscriber = observer; // pattern observer
    },

    // _addPost() {
    //     let newPost = {
    //         id: 6,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // _sendMessage() {
    //     let newMessage = {
    //         id: 8,
    //         message: this._state.dialogsPage.newDialogMessage,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newDialogMessage = "";
    //     this._callSubscriber(this._state);
    // },
    // _updateNewDialogMessage(newText) {
    //     this._state.dialogsPage.newDialogMessage = newText;
    //     this._callSubscriber(this._state);
    // }, - good variant

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            //this._addPost(); - good variant
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            if(this._state.profilePage.newPostText !== "") {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            //this._updateNewPostText(action.newText); - good variant
            this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            //this._sendMessage(); - good variant
            let newMessage = {
                id: 8,
                message: this._state.dialogsPage.newDialogMessage,
            }; 
            if(this._state.dialogsPage.newDialogMessage !== "") {
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newDialogMessage = "";
                this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_NEW_DIALOG_MESSAGE) {
            //this._updateNewDialogMessage(action.newText); - good variant
            this._state.dialogsPage.newDialogMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewDialogMessageActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_MESSAGE, newText: text})

export default store;
window.store = store;
// store - OOP