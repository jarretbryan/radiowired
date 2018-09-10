const initialState = {
    isEditing: false,
    title: "",
    description: "",
    id: null,
    justUpdated: false
}

const playlistReducer = (state = initialState, action) => {
    // console.log('working?')
    switch (action.type) {
        case 'is-editing':
            return { isEditing: true, title: action.payload.title, description: action.payload.description, id: action.payload.id }
        case 'not-editing':
            return {...initialState, justUpdated: true}
        case 'refresh-playlists':
            return { ...initialState, justUpdated: false }
        default:
            return state
    }
}

export default playlistReducer