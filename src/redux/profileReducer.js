const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 58},
        {id: 2, message: "It's my first post", likesCount: 137},
        {id: 3, message: "Kek, lol, azaza", likesCount: 3},
        {id: 4, message: "Hi, from future", likesCount: 20},
        {id: 5, message: "What's going on?", likesCount: 43}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            if(state.newPostText !== "") {
                state.posts.push(newPost);
                state.newPostText = "";
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;