import Knex from 'knex';
import knex from 'knex';

export default class DBManager {

    constructor(dbconfig){
        /**
         * @type knex
         */
        this._dbconfig = dbconfig;
    }


    /**
     * Sets up the DB connection and create the tables if not available.
     */
    init(){
        this._connection = knex(this._dbconfig);
        return this._connection.schema.hasTable('favorites').then((exists) => {
            if (!exists) {
              return this._connection.schema.createTable('favorites', (t) => {
                t.increments('id').primary();
                t.integer('user_id');
                t.string('repo_id', 100);
                t.unique(["user_id","repo_id"]);
              });
            }
          });
    }

    close(){
        return this._connection.destroy();
    }

    get connection(){
        return this._connection;
    }

}