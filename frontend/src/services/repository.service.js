
const userId = 1;
const searchCriteria = "tetris";

export default class RepositoryServce {

    constructor(ghClient, beClient) {
        this.ghClient = ghClient;
        this.beClient = beClient;
        this.getRepositories = this.getRepositories.bind(this);
    }

    async getRepositories(page) {


        let [repositories, favorites] = await Promise.all([
            this.ghClient.getRepositories(searchCriteria, page),
            this.beClient.getFavorites(userId)]);

        let favmap = favorites.items
            .reduce((map, item) => {
                map[item.repo_id] = item; return map;
            }, {});


        return repositories.items.map((i) => {
            return {
                id: i.node_id,
                name: i.name,
                login_name: i.owner.login,
                repository_size: i.size,
                favorite: favmap[i.node_id] != null
            }
        })
    }

}