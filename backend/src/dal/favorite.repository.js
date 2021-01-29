import DBManager from "./db.manager";


export default class FavoriteRepository {

    constructor(dbmanager) {
        /**
         * @type DBManager
         */
        this.dbmanager = dbmanager;
    }


    getAll(userId) {
        return this.dbmanager.connection("favorites")
            .where("user_id", userId)
            .select("*");
    }

    add(userId, repoId) {
        return this.dbmanager
            .connection("favorites")
            .insert([{ user_id: userId, repo_id:repoId }])
    }

    delete(userId, repoId) {
        return this.dbmanager
            .connection("favorites")
            .where("user_id", userId)
            .andWhere("repo_id", repoId).del()
    }

}