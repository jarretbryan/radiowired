
const initialState = {
    visiblePlayer: false,
    streamId: null
}

const playerReducer = (state = initialState, action) => {
    // console.log('working?')
    switch (action.type) {
        case 'show-player':
            return { visiblePlayer: true, streamId: action.payload}
        case 'hide-player':
            return { visiblePlayer: false, streamId: null }
        default:
            return state
    }
}

export default playerReducer