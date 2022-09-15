import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';

// configuracion .env 
dotenv.config();

// create app

const app: Express = express();

const port: string | number = process.env.port || 8000;

//define la route de la app

app.get('/', (req: Request, resp: Response) => {
    //send hello word

    resp.send('welcome to my API Restfull:  Express + JS+ Swagger + Mongoose');
});

app.get('/hello', (req: Request, resp: Response) => {
    //send hello word

    resp.send('welcome to GET route: Helloo! ');
});



// Execute APP and Listen 

app.listen(port, () => {
    console.log(`EXPRESS SERVER: Runnig at http://localhost:${port}`)

})



