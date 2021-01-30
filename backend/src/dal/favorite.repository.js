import DBManager from "./db.manager";


export default class FavoriteRepository {

    constructor(dbmanager) {
        /**
         * @type DBManager
         */
        this.dbmanager = dbmanager;
    }


    /**
     * Gets all the repositories favorited by a given user
     * @param {Number} userId 
     */
    getAll(userId) {
        return this.dbmanager.connection("favorites")
            .where("user_id", userId)
            .select("*");
    }

    /**
     * Marks a repository as favorite
     * @param {Number} userId 
     * @param {String} repoId 
     */
    add(userId, repoId) {
        return this.dbmanager
            .connection("favorites")
            .insert([{ user_id: userId, repo_id:repoId }])
    }

    /**
     * Removes a favorite from the favorite list
     * 
     * @param {Number} userId 
     * @param {String} repoId 
     */
    delete(userId, repoId) {
        return this.dbmanager
            .connection("favorites")
            .where("user_id", userId)
            .andWhere("repo_id", repoId).del()
    }

}