import { userEntity } from "../entities1/User.entities";
import { LogSucces, LogError } from "@/utils/logger";


//crud
/**
 * Method to obtain all useers from collectuion ""user in mongo server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {

    try {
        let userModel = userEntity();

        //search all users

        return await userModel.find({isDelete: false})

    }catch(error) {

        LogError(`[ORM ERROR] : Getting All Users: ${error}`)

    }


}


//todo get user by id
//-get user id by mail
//create user
// update user by 