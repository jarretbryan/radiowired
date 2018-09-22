
class FavoriteAdapter {

    static postFavorite(favObj) {

        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(favObj)
        }
        return fetch('https://shielded-everglades-42112.herokuapp.com/api/v1/favorites', postConfig)
    }


    static deleteFavorite(num){
        let delConfig = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }
        return fetch(`https://shielded-everglades-42112.herokuapp.com/api/v1/favorites/${num}`, delConfig)
    }

}

export default FavoriteAdapter