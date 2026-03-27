const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required: true //If the value of this field is not given, the system will display an error.
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required: true,
        lowercase: true
    },
    price:{
        type:String,
        required: true
    }
},
{
  versionKey: false
}
);
const productModel =  mongoose.model("productsData", productSchema); //databaser aer collection aer name dite hobe
module.exports = productModel;