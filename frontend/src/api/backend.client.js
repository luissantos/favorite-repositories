import axios from 'axios';


export default class BackendClient {

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3000/',
            timeout: 2000
        });
    }

    getFavorites(userId) {
        return this.instance.get(`/users/${userId}/favorites/repo/`)
            .then((res) => res.data);
    }

    addFavorite(userId, id) {
        return this.instance.put(`/users/${userId}/favorites/repo/${id}`)
            .then((res) => res.data)
    }

    deleteFavorite(userId, id) {
        return this.instance.delete(`/users/${userId}/favorites/repo/${id}`)
            .then((res) => res.data)
    }


}