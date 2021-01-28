import { expect } from 'chai';
import chai from 'chai';
import subset from 'chai-subset'
import request from 'supertest';
import Api from '../src/api'
import Express from 'express';

chai.use(subset);

const app = Express();

Api(app);

describe('API', function () {

  describe('Favorites', function () {
    
    it('Test that favorite can be stored', async () => {
      let res = await request(app)
        .put('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
        .send({})
        .expect(200);
    });


    it('Test that favorite can be deleted', async () => {
        let res = await request(app)
          .delete('/users/1/favorites/repo/MDEwOlJlcG9zaXRvcnk3Njk1NDUwNA==')
          .send({})
          .expect(200);
    });



  });
});

