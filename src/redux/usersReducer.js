import { userAPI } from "../api/api";


const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";


let InitialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
};


const usersReducer = (state = InitialState, action) => {

    switch(action.type) {
        case TOGGLE_FOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        if(u.followed === true)  
                            return {...u, followed: false}  
                        else
                            return {...u, followed: true}
                    }
                    return u;}),
            }
        case SET_USERS: {
            return {...state, users: action.users}
            }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
            }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
            }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state, 
                isFollowing: action.isFollowing 
                    ? [...state.isFollowing, action.userId] 
                    : state.isFollowing.filter(id => id != action.userId)
                }
            }
        default:
            return state;
    }
};

export const acceptFollow = (usersId) => ({type: TOGGLE_FOLLOW, usersId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowing = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
}}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        userAPI.follow(userId).then(response => {
            if(response.data.resultCode == 0) {
                dispatch(acceptFollow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
    });
}}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        userAPI.unfollow(userId).then(response => {
            if(response.data.resultCode == 0) {
                dispatch(acceptFollow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
    });
}}


export default usersReducer;