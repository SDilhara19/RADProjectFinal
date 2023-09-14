import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import usersRoute from './routes/usersRoute.js';
import borrowRoute from './routes/brrowRoute.js';
import stockRoute from './routes/stockRoute.js';
import genreRoute from './routes/genreRoute.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());



app.get('/', (request, response) => {
    //console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', booksRoute);
app.use('/users', usersRoute);
app.use('/genre', genreRoute);
app.use('/borrow', borrowRoute);
app.use('/stock', stockRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });    
})
    .catch((error) => {
        console.log(error);
    });
