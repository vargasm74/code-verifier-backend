/**
 * root ruter
 * redirections to routers
 
 */

import express, {Request,Response} from 'express';
import helloRouter from './HelloRoute';
import {LogInfo} from '@/utils/logger';

//server instance
let server = express();

//router instancie
let rootRouter = express.Router();

//GET http://localhost:8000/api/

rootRouter.get('/', (req: Request, resp: Response) => {
    //send hello word
    LogInfo('Get: http://localhost:8000/api/')

    resp.send('welcome to my API Restfull:  Express + JS+ Swagger + Mongoose');
});

//

server.use('/', rootRouter); //  http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> helloRouter

export default server;






