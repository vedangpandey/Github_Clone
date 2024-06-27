import { log } from "console";
import express from "express";
import userRoutes from './routes/user.routes.js'
import exploreRoutes from './routes/explore.routes.js'
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app=express();

app.use(cors());


app.get("/",(req,res)=>{
        res.send("Server is ready")
    }
)
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)

app.listen(5000,()=>{
    console.log("server started on http://localhost:5000");
})