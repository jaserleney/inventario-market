import Product from '../models/Product.js'

export const getAll = async (req, res) =>{
    try {
        const products = await Product.find()
        .populate('brand_id')
        .populate('ref_id')
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the products.'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        .populate('brand_id')
        .populate('ref_id')
        res.json(product)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the product.'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.name || !req.body.serial || !req.body.brand_id || !req.body.ref_id || !req.body.description || !req.body.status){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newProduct = new Product({
            name: req.body.name,
            serial: req.body.serial,
            brand_id: req.body.brand_id,
            ref_id: req.body.ref_id,
            description: req.body.description,
            status: req.body.status
        })
        const productSaved = await newProduct.save()
        res.status(201).json(productSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the product.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The product with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the product.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body)
        .populate('brand_id')
        .populate('ref_id')
        res.status(200).json({ 
            message: `The product with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the product.'
        })
    }
}