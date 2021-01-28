import { Router } from 'express';
import Express from 'express';

export default (app) => {
    const router = Router();
    
    app.use(Express.json());
    app.use(Express.urlencoded({extended : true}));
    

    router.get("/users/:userid/favorites/repo/", (req,res) => {
        res.send({
            items: []
        });
    });
    

    router.put("/users/:userid/favorites/repo/:repoid", (req,res) => {
        res.send({
    
        });
    });
    
    router.delete("/users/:userid/favorites/repo/:repoid", (req,res) => {
        res.send({
            
        });
    });
    

    
    app.use(router);

    return router;
}