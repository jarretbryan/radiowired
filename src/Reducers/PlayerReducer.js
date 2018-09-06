
const initialState = {
    visiblePlayer: false,
    streamId: null,
    thumbnail: "",
    streamTitle: ""
}

const playerReducer = (state = initialState, action) => {
    // console.log('working?')
    switch (action.type) {
        case 'show-player':
            return { visiblePlayer: true, streamId: action.payload['streamId'], thumbnail: action.payload['thumbnail'], streamTitle: action.payload['streamTitle']}
        case 'hide-player':
            return { visiblePlayer: false, streamId: null }
        default:
            return state
    }
}

export default playerReducer