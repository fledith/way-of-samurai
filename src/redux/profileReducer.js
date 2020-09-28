const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 137},
        {id: 2, message: "Hi, how are you?", likesCount: 58},
        {id: 3, message: "Kek, lol", likesCount: 3},
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    let id = state.posts.length + 1;

    switch(action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: id, message: newPost, likesCount: 0}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})

export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;