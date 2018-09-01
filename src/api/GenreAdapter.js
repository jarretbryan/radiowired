export default class GenreAdapter {

    static index() {
        const genre_URL = `http://localhost:4000/api/v1/genre`
        
        return fetch(genre_URL).then(res => res.json())
    }
            
}