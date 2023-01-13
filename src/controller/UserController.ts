import{Delete, Get,Post,Put,Query,Route, Tags} from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

// ORM - User Collection

import {deleteUSerByID, getAllUsers, getUserByID, createUser, updateUserByID} from "../domain/orm/User.orm"


@Route("/api/users")
@Tags("UserController")

/**
 * 
 *@param {string} id id ofuser  to retrieve (optional) 
 * @return all or user by id
 */


export class UserController implements IUserController{
  
  
   /*
    ** endpoint to retrieve the users in the collection in db
    */
@Get("/")
  public async getUsers(id?: string | undefined): Promise<any> {
    let response: any='';
    if(id){
      LogSuccess(`[/api/users] Get User por ID: ${id}`)

      response = await getUserByID(id);
      
    }else{

      LogSuccess('[/api/users] Get All Users Request')
      response = await getAllUsers();
      
    }
    return response;
   }
   

 /**
 * 
 *@param {string} id id of user  delete (optional) 
 * @return all or user by id
 * message
 */

   @Delete("/")
   public async deleteUser(id?: string | undefined): Promise<any> {
     let response: any='';
     if(id){
       LogSuccess(`[/api/users] Get User por ID: ${id}`)
 
       await deleteUSerByID(id).then((r)=>{
        response={
          message: `user Delete by ${id} Succesfull`
        }
       });
       
     }else{
 
       LogWarning('[/api/users] Delete User Request WITHOUT ID')
       response = {
        message:'Please, Prpvider an ID to remove from database'
       }
       
     }
     return response;
    }
    @Post("/")
    public async createUser(user: any): Promise<any> {
      
      let response: any='';

      await createUser(user).then((r)=>{

        response = {
          message: `USer created successfully: ${user.name}`
        }

      })
      return response;
    } 

    
    @Put("/")
    public async updateUSer(@Query()id: string, user: any): Promise<any> {


      let response: any='';
     if(id){
       LogSuccess(`[/api/users] update User por ID: ${id}`)
 
       await updateUserByID(id,user).then((r)=>{
        response={
          message: `user update by ${id} Succesfull`
        }
       });
       
     }else{
 
       LogWarning('[/api/users] Update User Request WITHOUT ID')
       response = {
        message:'Please, Prpvider an ID to remove from database'
       }
       
     }
     return response;

      
    }

}


