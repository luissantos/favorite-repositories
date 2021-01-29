import { expect } from 'chai';
import chai from 'chai';
import subset from 'chai-subset'
import request from 'supertest';
import Api from '../src/api'
import Express from 'express';
import DBManager from '../src/dal/DBManager';
import FavoriteRepository from '../src/dal/FavoriteRepository';

chai.use(subset);

let dbm = new DBManager({
  client: 'sqlite3',
  connection: {
    filename: ":memory:"
  },
  useNullAsDefault: true
});


let repository = new FavoriteRepository(dbm);

const app = Express();

Api(app, repository);

describe('API', function () {

  beforeEach(async () => {
    await dbm.init();
  });

  afterEach(async () => {
    await dbm.close();
  });

  describe('Favorites', function () {

    it('Test that favorite can be stored', async () => {

      await request(app)
        .put('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(200);

      await request(app)
        .put('/users/1/favorites/repo/2DEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(200);

      let res = await request(app)
        .get('/users/1/favorites/repo/')
        .expect(200);


      expect(res.body).to.containSubset(
        {
          items: [
            { id: 1, user_id: 1, repo_id: 'MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==' },
            { id: 2, user_id: 1, repo_id: '2DEwOlJlcG9zaXRvcnk3Njk1NDUwNA==' }
          ]
        }
      );

    });


    it('Test that existing favorited repo can be deleted', async () => {

      await request(app)
        .put('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(200);

      let res = await request(app)
        .delete('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(200);
    });


    it('Test that nonexisting favorited repo returns notfound', async () => {

      await request(app)
        .delete('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(404);
    });

  });
});

