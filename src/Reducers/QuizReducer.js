import { getGenres } from '../Actions/index'


const initialState = {
    genres: [],
    selectedGenres: []
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