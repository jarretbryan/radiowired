export default class GenreAdapter {

    static index() {
        const genre_URL = `http://localhost:4000/api/v1/genre`
        
        return fetch(genre_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }}).then(res => res.json())
    }
            
}