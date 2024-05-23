const Product = require('../models/product.model.js');
const model = require('../models/product.model.js')

// Get all products
const getProducts = async (req, res) => {
    try{
        const products = await  Product.find({});
        res.status(200).json(products)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

// Get a product by ID
const getProductById = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error){
        res.status(500).json({message: error.message})
    }
}

// Create a product
const createProduct = async (req,res) => {
    try{
        const product = await model.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// Update a product by its ID
const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product Not Found"})
        }
        
        const updtatedProduct = await Product.findById(id)
        res.status(200).json(updtatedProduct)

    } catch (error){
        res.status(500).json({message: error.message})
    }
}

// Delete a product by its ID
const deleteProduct =  async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product not found!"})
        }
        res.status(200).json({message: "Product deleted successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}