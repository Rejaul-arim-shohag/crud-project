const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    productName:{type:String, required:true},
    productCode:{type:String, required:true},
    img:{type:String},
    unitPrice:{type:String, required:true},
    quantity:{type:String, required:true},
    totalPrice:{type:String,},
    createDate:{type:Date, default:Date.now()},
}, {versionkey:false})

const productModel = mongoose.model("products",productSchema);
module.exports = productModel;