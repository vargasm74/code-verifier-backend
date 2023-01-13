import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError} from "../../utils/logger"

//crud
/**
 * Method to obtain all useers from collectuion ""user in mongo server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {

    try {
        let userModel = userEntity();

        //search all users

        return await userModel.find({isDelete: false})

    }catch(error) {

        LogError(`[ORM ERROR] : Getting All Users: ${error}`)
    }

}

//todo get user by id
export const getUserByID = async (id:string): Promise<any | undefined> => {

    try {
        let userModel = userEntity();
        //busqueda de user por id

        return await userModel.findById(id);
        
    } catch (error) {

        LogError(`[ORM ERROR] : Getting User By ID: ${error}`)
    }
}

//delete user
export const deleteUSerByID= async (id: string): Promise<any | undefined> => {
    try {
        let userModel= userEntity();

        //delete user by id
        return await userModel.deleteOne({_id: id})
        
    } catch (error) {
        LogError(`[ORM ERROR] : Getting User By ID: ${error}`)
    }
}


//create user

export const createUser= async(user: string): Promise<any | undefined> =>{

try {

    let userModel = userEntity();
  //create / insert new user
  return await userModel.create(user);
    
} catch (error) {

    LogError(`[ORM ERROR] : Getting User By ID: ${error}`)
    
}
}


// update user by 

export const updateUser= async(user: any, id: string): Promise<any | undefined> =>{

    try {
        
          let userModel= userEntity();
          //update User

          return await userModel.findByIdAndUpdate(id,user);
        

    } catch (error) {

        LogError(`[ORM ERROR] : Getting User By ID: ${error}`)
        
    }


}

//-get user id by mail

