const express = require('express');
const router = express.Router();
const productController = require("../controller/productController")

//create
router.post("/createProduct",productController.createProduct);
//read
router.get("/readProduct",productController.read);
//read one
router.get("/readOne/:id",productController.readById);
//update 
router.post("/updateProduct/:id",productController.update);
//delete
router.get("/deleteProduct/:id",productController.delete);


module.exports=router;