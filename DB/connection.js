import mongoose from "mongoose";
const connectDB= async()=>{
    return await mongoose.connect(process.env.DB).
    then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.error(`Error connecting to database: ${err}`);
    })
}
export default connectDB;