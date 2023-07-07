const Products = require('../models/productSchema');//import model

//to get all products controller
exports.products = async (req,res)=>{
    try {
        console.log('hi');
        const products = await Products.find({});
        // send any data to as response we use res.json, not an file send
        return res.status(200).json({
          data:{
            products,//collection/array
            message:"Getting All Products Successfully",
          }
        });
    } catch (error) {
        return res.json({
            message:'error while finding  products in db'
        });
    }
}

//create new products controller
exports.create = async (req,res)=>{
    try {
        const product = await Products.create(data);

        return res.status(200).json({
            data:{
                product,
                message:"Product Created Successfully",
            }
        });
    } catch (error) {
        return res.status(200).json({
            data:{
                message:"product is not create,found some issue while creating",
            }
        })
    }
}

//delete products controller
exports.deleteProduct = async (req,res)=>{
    try {
        const productId = req.params.productId;
        await Products.findByIdAndDelete(productId);

        return res.status(200).json({
            data:{
                message:"Product Deleted Successfully",
            }
        });
    } catch (error) {
        return res.status(200).json({
            data:{
                message:"product is not deleted,found some issue while deleting",
            }
        })
    }
}

//update products controller
exports.updateProduct = async (req,res)=>{
    try {
        const number = req.query.number;
        const productId = req.params.productId;
        // update product
        const findProduct = await Products.findById(productId);
        const newQuantity = findProduct.quantity + parseInt(number);
        findProduct.quantity = newQuantity;
        findProduct.save();

        // returning response
        return res.status(200).json({
            data:{
                product:findProduct,
                message:" Product Updated Successfully",
            }
        });
    } catch (error) {
        return res.status(200).json({
            data:{
                message:"product is not updated,found some issue while updating",
            }
        })
    }

}