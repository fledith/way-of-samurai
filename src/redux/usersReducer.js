const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";


let InitialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
            }
        default:
            return state;
    }
};

export const followAC = (usersId) => ({type: TOGGLE_FOLLOW, usersId});
export const setUsersAC = (users) => ({type: SET_USERS, users})



export default usersReducer;