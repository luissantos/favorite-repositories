import axios from 'axios'


export default class GitHubClient {

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.github.com/search/',
            timeout: 5000
        });
    }

    getRepositories(search_term, page) {
        return this.instance.get("/repositories", {
            params: {
                q: search_term,
                page: page != null ? page : 1
            }
        }).then((res) => res.data)
    }

}