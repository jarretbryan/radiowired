

// to fill in properly in a bit
const initialState = {
    user: null,
    loggedIn: false,
    checkingAuth: true,
    loginSuccess: false,
    error: null
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'set-active-user':
            return  { ...state, user: action.payload, loggedIn: true}
        case 'authenticating':
            return { ...state, checkingAuth: true }
        case 'authenticated':
            return { ...state, checkingAuth: false }
        case 'login-error':
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
                checkingAuth: false
            }
        case 'logout-user':
            return initialState
        default:
            return state
    }
}

export default usersReducer