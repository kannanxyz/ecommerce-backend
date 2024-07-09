//server start
const express = require('express');
const cors = require('cors');
 const cookieParser = require('cookie-parser');
const { userRouter } = require('./routes/userRouter');

const requestLogger = require('./utils/logger');
const unkownError = require('./utils/error');


const app = express();
// cors library
app.use(cors({
    origin:`http://localhost:5173`,
    credentials:true
}))
//cookie parser
app.use(cookieParser())
//parse middelware
app.use(express.json());
//middle ware
app.use(requestLogger)

app.use('/api/v1', userRouter);
//unkown error hitting messages
 app.use(unkownError)

module.exports = {
    app
};/// export to index.js