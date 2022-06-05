const productModel = require("../model/productsModel");
//create
exports.createProduct=(req, res)=>{
    const reqBody = req.body;
    // const data= {
    //     "productName": req.body.productName,
    //     "productCode":req.body.productCode,
    //     img:req.body.img,
    //     unitPrice:req.body.unitPrice,
    //     quantity:req.body.quantity,
    //     totalPrice:req.body.totalPrice,
    // };
    console.log(reqBody)
    productModel.create(reqBody, (err, data)=>{
        if(!err){
            res.status(200).json({"Status":"Success", "Data":data})
        }
        else{
            console.log(err)
            res.status(500).json({"Status":"Fail", "Data":err})
        }
    })
}
//read all
exports.read=(req, res)=>{
    const query={};
    const projection = "productName productCode img unitPrice quantity totalPrice";
    productModel.find(query, projection, (err, data)=>{
        if(!err){
            res.status(200).json({"Status":"Success","Data":data})
        }
        else{
            
            res.status(400).json({"Status":"Fail", "Data":err})
        }
    })
}

// read one
exports.readById=(req, res)=>{
    const query={_id:req.params.id};
    const projection = "productName productCode img unitPrice quantity totalPrice";
    productModel.find(query, projection, (err, data)=>{
        if(!err){
            res.status(200).json({"Status":"Success","Data":data})
        }
        else{
            res.status(400).json({"Status":"Fail", "Data":err})
        }
    })
}

//update 
exports.update=(req, res)=>{
    const id= req.params.id;
    const query = {_id:id};
    const reqBody = req.body;
    productModel.updateOne(query, reqBody, (err, data)=>{
        if(!err){
            res.status(200).json({"Status":"Success", "Data":data})
        }
        else{
            res.status(400).json({"Status":"Fail","Data":err})
        }
    })
}
//delete 
exports.delete=(req, res)=>{
    const id=req.params.id;
    const query = {_id:id};
    productModel.deleteOne(query, (err, data)=>{
        if(!err){
            res.status(200).json({"Status":"success","Data":data})
        }
        else{
            res.status(400).json({"Status":"fail", "Data":err})
        }
    })
}