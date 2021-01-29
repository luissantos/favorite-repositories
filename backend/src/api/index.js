import { Router } from 'express';
import Express from 'express';
import cors from 'cors';


export default (app,repo) => {
    const router = Router();
    

    const handleError = (req,res) => (error) => {
        console.error(error);
        res.status(500).send({ error: 'Something failed!' })
    }
  
    app.use(Express.json());
    app.use(Express.urlencoded({extended : true}));
    app.use(cors());
    

    router.get("/users/:userid/favorites/repo/", (req,res) => {
        repo.getAll(req.params.userid)
                    .then((d)=> {
                        res.send({ items: d });
                    })
                   .catch(handleError(req,res));
    });
    

    router.put("/users/:userid/favorites/repo/:repoid", (req,res) => {
        repo.add(req.params.userid,req.params.repoid)
                   .then((d)=> {
                       res.send({});
                   })
                   .catch(handleError(req,res));
        
    });
    
    router.delete("/users/:userid/favorites/repo/:repoid", (req,res) => {
        repo.delete(req.params.userid,req.params.repoid).then( (result) => {
            if(result === 1){
                res.status(200)
                .send();
            }else{
                res.status(404)
                .send();
            }
        }).catch(handleError(req,res));
        
        
    });
    

    
    app.use(router);

    return router;
}