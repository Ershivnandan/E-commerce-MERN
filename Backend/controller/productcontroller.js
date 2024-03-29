const Product = require('../Modals/productModal');



//Create product-- Admin

exports.createProduct = async(req,res )=>{
    const product = await Product.create(req.body);

    res.status(201).json({success:true,data:product})
}

//GET All products

exports.getAllProducts = async (req,res) =>{

    const products = await Product.find();
    res.status(200).json({success:true, data:products});
}

//Update Product --Admin

exports.updateProduct = async (req, res) =>{
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new:true, runValidators:true, useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    });
}

// Delete Product --Admin

exports.deleteProduct = async (req,res) =>{

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not fount!"
        })
    }

    await Product.remove();
    res.status(200).json({
        success:true,
        message: "Product Delete"
    })
}