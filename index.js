import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/patientRoutes.js";


const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Connected successfully")
        
        app.listen(PORT,()=>{
        console.log(`Server is running on port : ${PORT}`)
    });

app.use("/api/user",route);

})
.catch((error) => console.log(error));

app.use("/api/user",route);

