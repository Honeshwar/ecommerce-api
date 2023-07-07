//setup database (mongodb)
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ECOMMERCEE_API_DEVELOPMENT").then(()=>{
    return console.log("server is connected to Database...");
}).catch((error)=>{
    return console.log("server find an issue to connect to Database",error);
});

module.exports = mongoose.connection;