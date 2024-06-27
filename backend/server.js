import express from "express";
import userRoutes from './routes/user.routes.js'
import exploreRoutes from './routes/explore.routes.js'
import authRoutes from './routes/auth.routes.js'
import dotenv from 'dotenv';
import cors from 'cors';
import connectMongoDB from "./db/connectMongoDB.js";
import "./passport/github.auth.js"
import session from "express-session";
import passport from "passport";

dotenv.config();

const app=express();

app.use(cors());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
        res.send("Server is ready")
    }
)
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)
app.use("/api/auth",authRoutes)

app.listen(5000,()=>{
    console.log("server started on http://localhost:5000");
    connectMongoDB()
})