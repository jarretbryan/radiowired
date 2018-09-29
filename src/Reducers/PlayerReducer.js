
const initialState = {
    visiblePlayer: false,
    streamId: null,
    thumbnail: "",
    streamTitle: "",
    website: ""
}

const playerReducer = (state = initialState, action) => {
    // console.log('working?')
    switch (action.type) {
        case 'show-player':
            return { visiblePlayer: true, streamId: action.payload['streamId'], thumbnail: action.payload['thumbnail'], streamTitle: action.payload['streamTitle'], website: action.payload['website']}
        case 'hide-player':
            return initialState
        default:
            return state
    }
}

export default playerReducer