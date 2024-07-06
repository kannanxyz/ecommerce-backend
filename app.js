//server start
const express = require('express');

const { userRouter } = require('./routes/userRouter');

const app = express();

app.use('/api/v1', userRouter);

module.exports = {
    app
};/// export to index.js