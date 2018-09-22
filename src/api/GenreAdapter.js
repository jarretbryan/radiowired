export default class GenreAdapter {

    static index() {
        const genre_URL = `https://shielded-everglades-42112.herokuapp.com/api/v1/genre`
        
        return fetch(genre_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }}).then(res => res.json())
    }

    static postGenre(obj){
        const genre_URL = `https://shielded-everglades-42112.herokuapp.com/api/v1/quizresults`

        return fetch(genre_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            return data
        })

    }
            
}