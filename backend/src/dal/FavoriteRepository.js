import DBManager from "./DBManager";


export default class FavoriteRepository{

    constructor(dbmanager){
        /**
         * @type DBManager
         */
        this.dbmanager = dbmanager;
        this.getAll = this.getAll.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }


    getAll(user_id){
        return this.dbmanager.connection("favorites")
                      .where("user_id",user_id)
                      .select("*");
    }

    add(user_id,repo_id){
        return this.dbmanager
                   .connection("favorites")
                   .insert([{user_id,repo_id}])
    }

    delete(user_id,repo_id){
        return this.dbmanager
                   .connection("favorites")
                   .where("user_id",user_id)
                   .andWhere("repo_id",repo_id).del()
    }

}