import express from 'express'
import mysql2 from "mysql2"
import bodyParser from 'body-parser';
import rootRouter from './routes/root.router.js';
import cors from "cors"

const app = express();

app.use(bodyParser.json({}))
app.use(cors())

app.use(rootRouter)
app.listen(3000);