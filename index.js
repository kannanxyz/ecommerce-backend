const { MONGODB_URL } = require('./utils/config');
const {app}= require('./app');

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("connectd to Database....")
    app.listen(4001, () => {
        console.log('Server is running on port 4001');
    });
}).catch((err) => {
    console.log("sorry we can't connecet database..",err);
});



