import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 137},
        {id: 2, message: "Hi, how are you?", likesCount: 58},
        {id: 3, message: "Kek, lol", likesCount: 3},
    ],
    newPostText: "",
    profile: null
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
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default: 
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
}}

export default profileReducer;