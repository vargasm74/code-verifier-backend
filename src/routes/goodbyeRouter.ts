import express, { Request, Response } from "express";
import { goodbyeController  } from "../controller/goodbyeController";
import { LogInfo } from "../utils/logger";

//Router from express

let goodbyeRouter = express.Router();

goodbyeRouter.route('/')

.get(async (req: Request, res: Response)=>{
    //obtain a query param
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    //controler instance execute method
    const controller: goodbyeController = new goodbyeController();
     //Obtain Response
     const response = await controller.getMessage(name);
     // send to client response

     return res.send(response);

})

//export hello router
export default goodbyeRouter;