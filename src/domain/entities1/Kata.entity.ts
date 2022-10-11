import mongoose from "mongoose";

export const userEntity = () => {

    let userSchema = new mongoose.Schema({
name: String,
Description: String,
Level : Number,
User: String,
Date: Date ,
Valoration: Int32Array ,
Chances: Int32Array


    }
    )

    return mongoose.model('User', userSchema);
}