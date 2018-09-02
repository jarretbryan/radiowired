export default class StreamAdapter {

    static stream_index(num) {
        

        return fetch(`http://localhost:4000/api/v1/playlists/${num}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
    }

}