import { Router } from 'express';
import Express from 'express';
import FavoriteRepository from '../dal/FavoriteRepository';


export default (app,/** @type FavoriteRepository */ repo) => {
    const router = Router();
    
    app.use(Express.json());
    app.use(Express.urlencoded({extended : true}));
    

    router.get("/users/:userid/favorites/repo/", async (req,res) => {
        let items = await repo.getAll(req.params.userid);
        res.send({ items });
    });
    

    router.put("/users/:userid/favorites/repo/:repoid", async (req,res) => {
        let r = await repo.add(req.params.userid,req.params.repoid);
        res.send();
    });
    
    router.delete("/users/:userid/favorites/repo/:repoid", async (req,res) => {
        let result = await repo.delete(req.params.userid,req.params.repoid);
        if(result == 1){
            res.status(200)
            .send();
        }else{
            res.status(404)
            .send();
        }
        
    });
    

    
    app.use(router);

    return router;
}