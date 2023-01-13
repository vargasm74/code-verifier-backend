import express, { Request, Response } from "express";
import {UserController} from "../controller/UserController";
import { LogInfo } from "../utils/logger";

// Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users?id=63bec94d92bdeb74055e7fd8
usersRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        //obtain Query param(ID)
        let id: any =req?.query?.id;
        LogInfo(`Query Param: $(id)`);       
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Reponse
        const response: any = await controller.getUsers(id);
        // Send to the client the response
        return res.send(response);
    })
    // delete
    .delete(async(req:Request, res: Response)=>{
        //obtain Query Param(id)
        let id:any = req?.query.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Reponse
        const response: any = await controller.deleteUser(id);
        // Send to the client the response
        return res.send(response);
        
    })
    //post
    .post(async(req:Request, res: Response)=>{

        let name: any = req?.query?.name;
        let age: any = req?.query?.age;
        let email: any = req?.query?.email;

        //instance to excute method

        
        let user ={

            name: name || 'default',
            email:email || 'default',
            age:age || 18
        }
         
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Reponse
        const response: any = await controller.createUser(user);
        // Send to the client the response
        return res.send(response);

    })


    .put(async(req:Request, res: Response)=>{

        let name: any = req?.query?.name;
        let age: any = req?.query?.age;
        let email: any = req?.query?.email;

        //instance to excute method

        
        let user ={

            name: name || 'default',
            email:email || 'default',
            age:age || 18
        }
       //obtain Query param(ID)
       let id: any =req?.query?.id;
       LogInfo(`Query Param: $(id)`);     


        
    })
// Export Hello Router
export default usersRouter;