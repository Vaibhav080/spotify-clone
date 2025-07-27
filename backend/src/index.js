import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express';
import fileUpload from "express-fileupload";
import path from "path";
import {connectDB} from './lib/db.js'
import cors from "cors";
import fs from "fs";
import { createServer } from "http";
import cron from "node-cron";

import { initializeSocket } from "./lib/socket.js";

import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songRoutes from "./routes/song.route.js"
import albumRoutes from "./routes/album.route.js"
import statsRoutes from "./routes/stats.route.js"

dotenv.config();

const __dirname= path.resolve();
const app = express();
const PORT = process.env.PORT;

const httpserver = createServer(app);
initializeSocket(httpserver)

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
))

app.use(express.json()); //to parse req.body
app.use(clerkMiddleware()); // this will add auth to req object => req.auth.userid => to know which user is sending the req. 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits:{
        fileSize: 10*1024*1024, //10mb max file size
    },
}));

const tempDir = path.join(process.cwd(), "tmp")
// cron jobs

cron.schedule("0 0 * * *", () => {
    if (fs.existsSync(tempDir)) {
        fs.readdir(tempDir, (err, files) => {
            if (err) {
                console.log("error", err);
                return;
            }
            for (const file of files) {
                fs.unlink(path.join(tempDir, file), (err) => {});
            }
        });
    }
})

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/*",(req,res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
    })
}

//error handler
app.use((err,req,res,next) => {
    res.status(500).json({message: process.env.NODE_ENV === "production"? "Internal Server Error" : err.message});
})

httpserver.listen( PORT || 5000, ()=> {
    console.log("Server is running on port "+ PORT);
    connectDB();
});

