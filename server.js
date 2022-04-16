import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js"
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';

const CONNECTION_STRING = 'mongodb+srv://abhishekkr:CoffeeShop50@cluster0.sw9ff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

// const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());


// app.get('/hello', (req, res) => {res.send('Life is good!')})

helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
console.log("Printing port")
console.log(process.env.PORT);
app.listen(process.env.PORT || 4000);