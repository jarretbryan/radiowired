

// to fill in properly in a bit
const initialState = {
    user: null,
    loggedIn: false,
    // authenticated: false,
    loginSuccess: false,
    error: null
}


const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'set-active-user':
            return  { ...state, user: action.payload, loggedIn: true}
        default:
            return state
    }
}

export default usersReducer