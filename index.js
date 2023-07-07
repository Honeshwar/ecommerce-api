const express = require('express');//setup express.
require('./config/mongoose');//require because to execute database code or setup database.
const bodyParser = require('body-parser');// use to parse request .

const app = express();//create express app.
app.use(bodyParser.json()); // parse application/json [content-type].

// just for console.log request url
app.use('/',(req,res,next)=>{
    console.log("Request url : ",req.url);
})
//use router MW for any request start with '/'
app.use('/',require('./routers/index'));

app.listen(8000,(err)=>{
    if(err){
        console.log('error while listening server on port 8000');
        return;
    }
    console.log('server is running... fine on port 8000');
    return;
});