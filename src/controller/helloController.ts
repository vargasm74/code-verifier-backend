import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSucces } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloControler {
    /**
     * Endpoint to retreive a Message "Hello {name}" in JSON
     * @param { string | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of Basicresponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSucces('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || "World!"}`
        }

    }

    
}