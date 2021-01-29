


export default class RepositoryServce {

    constructor(ghClient,beClient){
        this.ghClient = ghClient;
        this.beClient = beClient;
        this.getRepositories = this.getRepositories.bind(this);
    }

    async getRepositories(page){
        let res = await this.ghClient.getRepositories("tetris",page);

        let favorites = await this.beClient.getFavorites(1);

        let favmap = {};
        favorites.items.forEach( (f) => {
            favmap[f.repo_id] = f;
        });


        return res.items.map( (i) => {
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