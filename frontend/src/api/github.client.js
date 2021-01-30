import axios from 'axios'


export default class GitHubClient {

    constructor(config) {
        this.instance = axios.create(config);
    }

    /**
     * Gets all the repositories bases on search term
     * @param {String} search_term 
     * @param {Number} page 
     */
    getRepositories(search_term, page) {
        return this.instance.get("/repositories", {
            params: {
                q: search_term,
                page: page != null ? page : 1
            }
        }).then((res) => res.data)
    }

}