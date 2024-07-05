//server start
const express = require('express');
const { model } = require('mongoose');

const app = express();

app.get('/',(request,response)=>{
    response.send("Hello World");
})

module.exports={
app
}