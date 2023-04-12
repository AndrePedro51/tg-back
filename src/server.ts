import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import { router } from './shared/routes';
import createConnection from  "./shared/typeorm";
import "@shared/container"
import { AppError } from "@shared/errors/AppError";
import cors from 'cors'

createConnection();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.use(cors());
    next();
});

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log("Server is running"));