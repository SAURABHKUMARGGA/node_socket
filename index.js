dotenv.config();
import express from 'express'
import dotenv from 'dotenv'
import router from './Router/route.js'
import server from 'http'
import {Server} from 'socket.io'
const app = express();
const io = new Server(server.createServer(app));



app.use(router);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

