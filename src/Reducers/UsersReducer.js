

// to fill in properly in a bit
const initialState = {
    user: null,
    loggedIn: false,
    // authenticated: false,
    loginSuccess: false,
    error: null
}

const dummyState = {
    user: {
        "id": 1,
        "email": "test1@test.com",
        "username": "TestMan",
        "profile_image": "http://www.maximumfun.org/images/jesse500.jpg",
        "password_digest": "$2a$10$fnlSC3RUwui.j82P9JOCPOOFqa3rU1dquS7Y0dCazViWYI27iYpYe",
        "created_at": "2018-08-31T15:31:32.721Z",
        "updated_at": "2018-08-31T15:31:32.721Z",
        "playlists": [
            {
                "id": 1,
                "title": "Just for Laughs",
                "description": "I just want to Laugh!",
                "genre": "Comedy",
                "user_id": 1
            },
            {
                "id": 2,
                "title": "Stock Options",
                "description": "On my Warren Buffet",
                "genre": "Investing",
                "user_id": 1
            }
        ]
    },
    loggedIn: true,
    // authenticated: false,
    loginSuccess: true,
    error: null
}


const usersReducer = (state=dummyState, action) => {
    switch(action.type){
        case 'set-active-user':
            return  { ...state, user: action.payload, loggedIn: true}
        default:
            return state
    }
}

export default usersReducer