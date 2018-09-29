export const loginUser = (email, password) => {
    return dispatch => {
        dispatch(authenticatingUser())
        fetch('https://shielded-everglades-42112.herokuapp.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response.message){
                    throw new Error('failed-login')
                } else {
                    return response
                }            
            })
            .then(({ user, jwt }) => {
                localStorage.setItem('jwt', jwt)
                localStorage.setItem('loggedIn', 'true')
                dispatch(setCurrentUser(user))
            }).catch(error => {
                console.log(error)
                localStorage.clear()
                dispatch(badLogin(error))
            })
    }
}

export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return dispatch => {
        
        fetch('https://shielded-everglades-42112.herokuapp.com/api/v1/profile', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(response => response.json())
            .then(({ user }) => dispatch(setCurrentUser(user)))
    }
}

export const setCurrentUser = userData => ({
    type: 'set-active-user',
    payload: userData
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'authenticating' })

export const badLogin = error => {
    return { type: 'login-error', payload: error }
}

export const logoutUser = () => ({
    type: 'logout-user'
})
    
    
