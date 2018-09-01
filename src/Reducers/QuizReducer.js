
const initialState = {
    genres: []
}

const quizReducer = (state=initialState, action) => {
    switch(action.type){
        case 'get-all-genres':
            return {...state, genres: action.payload}
        default:
            return state
    }
}

export default quizReducer