dotenv.config();
import express from 'express'
import dotenv from 'dotenv'
import router from './Router/route.js'
import http from 'http'
import {Server} from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = new Server(server);



app.use(router);
io.on("connection",(socket)=>{
    console.log("New user connected");
    socket.on("message",(msg)=>{
        console.log(msg);
        io.emit("newmessage",msg);
    });
})

server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

