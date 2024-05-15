import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = "mongodb://localhost:27017/Polling-Api";

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url);
        console.log("Mongodb connected using mongoose");
    } catch (err) {
        console.log("Error in connecting to db");
        console.log(err);
    }
}