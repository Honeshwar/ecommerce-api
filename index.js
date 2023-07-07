const express = require('express');//setup express.
const app = express();//setup express.
require('./config/mongoose');//require because to execute database code or setup database.
//parse request 
// parse application/x-www-form-urlencoded  content-type
// app.use(express.urlencoded());
// app.use(express.json());
const bodyParser = require('body-parser')
// parse application/json content-type
app.use(bodyParser.json())


//use router MW for any request start with '/'
app.use('/',require('./routers/index'));
app.listen(8000,(err)=>{
    if(err){
        console.log('error while listening server on port 8000');
        return;
    }
    console.log('server is running... fine on port 8000');
    return;
})