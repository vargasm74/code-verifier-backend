import express, { Express, Request, Response } from "express";
//variable de entorno
import dotenv from 'dotenv';
//Swagger
import swaggerUI from 'swagger-ui-express';



// seguridad
import cors from 'cors';
import helmet from 'helmet';

//TODO HTTPS
import rootRouter from '../routes';
import mongoose from "mongoose";

// configuracion .env 
dotenv.config();

// create app
const server: Express = express();
// swagger config and route

server.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions:{
            url:"/swagger.json",
            explore:true
        }
        
    })
    );
const port: string | number = process.env.port || 8000;

//define server use "/api and use rootRouter from index.ts" in routes
server.use(
    '/api',
    rootRouter
    );

    //static server
    server.use(express.static('public'));

//TODO:moongoose connection

mongoose.connect('mongodb://localhost:27017/libreria')

//security config
server.use(helmet());
server.use(cors());
// content types
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit:'50mb'}));

//http://localhost:8080 --> http://localhost:8000/api/
server.get('/',(req:Request, res:Response)=> {
    res.redirect('/api');
})

export default server;
