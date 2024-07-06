//create routers
 const express = require('express');
const userRouter = express.Router();
const {usecontroller} = require('../controller/usercontroller');

// add routes
userRouter.get('/',usecontroller.getData)

module.exports ={ userRouter}; // export to app.js
