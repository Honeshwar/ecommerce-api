//setup schema
const mongoose = require('mongoose');// layer b/w server and db,with hep of mongoose we can manage database/mongodb at server(we can do CRUD operation in database and can create schema without writing command)
const productSchema = new mongoose.Schema({//HERE we predefine field of document
    name:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    },
},{timestamps:true});

const Products = mongoose.model("Products",productSchema);//create collection
module.exports = Products;//export model/collection