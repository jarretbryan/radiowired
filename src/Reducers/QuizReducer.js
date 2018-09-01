const initialState = {
    genres: []
}

const genreReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET-GENRES':
            return {...state, genres: action.payload}
        default:
            return state
    }
}

export default genreReducer