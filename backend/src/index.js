import Express from 'express';
import Api from './api';
import DBManager from './dal/DBManager'
import FavoriteRepository from './dal/FavoriteRepository'

const app = Express();

let dbm = new DBManager({
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    },
    useNullAsDefault: true
  });
dbm.init();

let repository = new FavoriteRepository(dbm);

Api(app,repository);



app.listen(3000,  () => {
    console.log("Listening on port 3000");
});
