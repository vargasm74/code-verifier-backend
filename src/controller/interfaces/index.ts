import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}


export interface IUserController{
    //read all users from database
    getUsers(id?:string):Promise<any>
    //delete user
    deleteUser(id?:string):Promise<any>
    //create user
    createUser(user:any):Promise<any>
    //update user
    updateUSer(id:string, user:any): Promise<any>   
}


