import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 137},
        {id: 2, message: "Hi, how are you?", likesCount: 58},
        {id: 3, message: "Kek, lol", likesCount: 3},
    ],
    profile: null,
    status: "",
}

initialState.posts.reverse();


const profileReducer = (state = initialState, action) => {

    let id = state.posts.length + 1;

    switch(action.type) {
        case ADD_POST: {
            let newPost = action.newPostBody;
            return ({
                ...state,
                posts: [{id: id, message: newPost, likesCount: 0}, ...state.posts]
            })
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default: 
            return state;
    }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => {
    return (dispatch) => {
       profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
}}

export const getUserStatus = (userId) => {
    return (dispatch) => {
       profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
}}

export const updateUserStatus = (status) => {
    return (dispatch) => {
       profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }})
}}

export default profileReducer;