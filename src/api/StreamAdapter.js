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

}