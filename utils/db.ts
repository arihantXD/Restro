import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("Database already connected");
            return;
        }
        await mongoose.connect("mongodb://localhost:27017/Toaster");
        console.log("Database successfully connected");
    } catch (error) {
        console.error("Error while connecting to database");
        console.error(error);
        return;
    }
}