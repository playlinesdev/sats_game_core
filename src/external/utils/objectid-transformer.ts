import mongoose from "mongoose";

export const stringToObjectId = (objStr: string): mongoose.Types.ObjectId => {
    return new mongoose.Types.ObjectId(objStr)
}