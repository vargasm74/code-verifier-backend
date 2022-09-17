import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSucces  } from "../utils/logger";
const date = new Date(0);

export class goodbyeController implements goodbyeController{
   public async getMessage(name?: string | undefined): Promise<BasicResponse> {
       LogSucces('[/api/goodbye] Get Request');

       return{
        message: `goodbye ${date || "world!!"}`
       }
    }

}