import Express from 'express';
import Api from './api';
import DBManager from './dal/db.manager';
import FavoriteRepository from './dal/favorite.repository';
import config from './config';

const app = Express();

let dbm = new DBManager(config.database);
dbm.init();

let repository = new FavoriteRepository(dbm);

Api(app,repository);



app.listen(3000,  () => {
    console.log("Listening on port 3000");
});
