import { Get, Query, Route, Tags } from "@tsoa/runtime";
import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSucces  } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloControler{
  /**
   * EndPoint to retreive a Message "Hello {name}" in JSON
   * @param {string | undefined} name Name of user to be greated
   * @return promise of basucaresponse
  */
    @Get("/")
    public async getMessage(@Query()name?: string | undefined): Promise<BasicResponse> {
       LogSucces('[/api/hello] Get Request');

       return{
        message: `Hello ${name || "world!!"}`
       }
    }

}