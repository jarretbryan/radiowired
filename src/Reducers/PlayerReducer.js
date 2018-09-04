
const initialState = {
    visiblePlayer: false
}

const playerReducer = (state = initialState, action) => {
    // console.log('working?')
    switch (action.type) {
        case 'show-player':
            return { visiblePlayer: true}
        case 'hide-player':
            return { visiblePlayer: false }
        default:
            return state
    }
}

export default playerReducer