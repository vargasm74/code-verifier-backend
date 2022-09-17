import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSucces  } from "@/utils/logger";

export class HelloController implements IHelloControler{
   public async getMessage(name?: string | undefined): Promise<BasicResponse> {
       LogSucces('[/api/hello] Get Request');

       return{
        message: `Hello ${name || "world!!"}`
       }
    }

}