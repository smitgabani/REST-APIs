import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../model/user.model";

export async function name(input:DocumentDefinition<UserDocument>) {
    try {
        await UserModel.create(input)
    } catch(e: any) {
        throw new Error(e);
    }finally {}
}