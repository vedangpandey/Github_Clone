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
import path from "path";

dotenv.config();

const PORT=process.env.PORT||5000
const app=express();

const __dirname=path.resolve()
console.log(__dirname);
app.use(cors());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)
app.use("/api/auth",authRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
    connectMongoDB()
})