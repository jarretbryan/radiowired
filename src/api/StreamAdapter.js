export default class StreamAdapter {

    static stream_index(num) {
        
        return fetch(`http://localhost:4000/api/v1/playlists/${num}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
    }

    static post_playlist(postObj) {
        return fetch(`http://localhost:4000/api/v1/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(postObj)
        }).then(res => res.json())
    }

    static edit_playlist(patchObj){
        return fetch(`http://localhost:4000/api/v1/playlists/${patchObj.playlist_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(patchObj)
        }).then(res => res.json())
    }

    static delete_playlist(num){
        return fetch(`http://localhost:4000/api/v1/playlists/${num}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
    }

    static get_episodes(streamId){
        return fetch(`http://localhost:4000/api/v1/play-episode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                stream_id: streamId
            })
        }).then(res => res.json())
    }

    static delete_episodes(){
        return fetch(`http://localhost:4000/api/v1/delete-episode`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
            // body: JSON.stringify({
            //     stream_id: streamId
            // })
        })
        // .then(res => res.json())
    }

}