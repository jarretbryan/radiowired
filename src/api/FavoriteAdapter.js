
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
        return fetch('http://localhost:4000/api/v1/favorites', postConfig)
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
        return fetch(`http://localhost:4000/api/v1/favorites/${num}`, delConfig)
    }

}

export default FavoriteAdapter