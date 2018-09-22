
class UserAdapter {

    // static index() {
    //     return fetch('http://localhost:4000/api/v1/users').then(res => res.json())
    // }

    // static showUser(userId) {
    //     return fetch(`http://localhost:4000/api/v1/users/${userId}`).then(res => res.json())
    // }

    static getUser(num){
        let postConfig = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }
        return fetch(`https://shielded-everglades-42112.herokuapp.com/api/v1/users/${num}`, postConfig).then(res => res.json())
    }

    static postUser(userObj) {

        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        }
        return fetch('https://shielded-everglades-42112.herokuapp.com/api/v1/auth/register', postConfig).then(res => res.json())
    }

}

export default UserAdapter