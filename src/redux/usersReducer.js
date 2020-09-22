const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";


let InitialState = {
    users: [
        {id: 1, avatar: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", followed: true, nickname: "Daniil", status: "I'm searching a job", location: {city: "Zhytomyr", country: "Ukraine"}},
        {id: 2, avatar: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", followed: true, nickname: "Zekich", status: "I'm searching a job", location: {city: "Zhytomyr", country: "Ukraine"}},
        {id: 3, avatar: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", followed: false, nickname: "Dimych", status: "I'm a boss", location: {city: "Minsk", country: "Belarus"}},
        {id: 4, avatar: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", followed: false, nickname: "Viktor", status: "I've work, but I'm searching a better offer", location: {city: "Kiev", country: "Ukraine"}},
    ]
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