export const editPlaylist = (playlistInfoObj) => {
    // console.log('hey!') 
    return {
        type: 'is-editing',
        payload: playlistInfoObj
    }
}

export const finishPlaylistEdit = () => ({
    type: 'not-editing'
})

export const refreshPlaylists = () => ({
    type: 'refresh-playlists'
})