import express, { Request, Response } from "express";
import { HelloController  } from "../controller/helloController";
import { LogInfo } from "../utils/logger";

//Router from express

let helloRouter = express.Router();

helloRouter.route('/')

.get(async (req: Request, res: Response)=>{
    //obtain a query param
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    //controler instance execute method
    const controller: HelloController = new HelloController();
     //Obtain Response
     const response = await controller.getMessage(name);
     // send to client response

     return res.send(response);

})

//export hello router
export default helloRouter;