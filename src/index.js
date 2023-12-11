// require("dotenv").config({path:'./env'});
import dotenv from 'dotenv';


import connectDB from "./db/index.js";

connectDB();

dotenv.config(
    {
        path:'./env'
    }
)











/*
const app = express();
; (async () => { 
    try{
        await
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("Error",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch(error)
    {
        console.log(error)
        throw error;
    }
})()
*/