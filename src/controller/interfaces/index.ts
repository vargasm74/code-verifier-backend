import { BasicResponse } from "../types";


export interface IHelloControler{

    getMessage(name?:string): Promise<BasicResponse>
    
}

export interface goodbyeController{

    getMessage(name?:string): Promise<BasicResponse>
    
}