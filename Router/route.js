import express from 'express';
import path from 'path';

const router = express.Router();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

router.route('/')
    .get((req, res) => {
        // res.send('Hello World');
        console.log(__dirname);
        // res.send("ok");
        res.sendFile(path.join(__dirname,'../pages/msg.html'));
    });


export default router;
