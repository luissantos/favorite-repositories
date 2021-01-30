import axios from 'axios';


export default class BackendClient {

    constructor(config) {
        this.instance = axios.create(config);
        this.addFavorite = this.addFavorite.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }

    /**
     * Gets all the repositories favorited by a given user
     * @param {Number} userId 
     */
    getFavorites(userId) {
        return this.instance.get(`/users/${userId}/favorites/repo/`)
            .then((res) => res.data);
    }

    /**
     * Marks a repository as favorite
     * @param {Number} userId 
     * @param {String} id 
     */
    addFavorite(userId, id) {
        return this.instance.put(`/users/${userId}/favorites/repo/${id}`)
            .then((res) => res.data)
    }

    /**
     * Removes a favorite from the favorite list
     * @param {Number} userId 
     * @param {String} id 
     */
    deleteFavorite(userId, id) {
        return this.instance.delete(`/users/${userId}/favorites/repo/${id}`)
            .then((res) => res.data)
    }


}