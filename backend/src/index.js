import Express from 'express';
import Api from './api';

const app = Express();

Api(app);


app.listen(3000,  () => {
    console.log("Listening on port 3000");
});
