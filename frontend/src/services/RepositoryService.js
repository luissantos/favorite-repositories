


export default class RepositoryServce {

    constructor(ghclient){
        this.ghclient = ghclient;
        this.getRepositories = this.getRepositories.bind(this);
    }

    async getRepositories(page){
        let res = await this.ghclient.getRepositories("tetris",page);

        return res.items.map( (i) => {
            return {
                id: i.node_id,
                name: i.name,
                login_name: i.owner.login,
                repository_size: i.size,
                favorite: false
            }
        })
    }

}