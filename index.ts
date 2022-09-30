import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/routers/routers"

const PORT = 2212;

mongoose.connect('mongodb://localhost:27017/thimodule4').then(() => {
    console.log("connect DB success")
}).catch((err) => {
    throw err
})


const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', router);


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
