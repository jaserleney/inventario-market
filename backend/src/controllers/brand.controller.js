import Brand from '../models/Brand.js'

export const getAll = async (req, res) =>{
    try {
        const brands = await Brand.find()
        res.status(200).json(brands)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the brands'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const brand = await Brand.findById(req.params.id)
        res.json(brand)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the brands'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newBrand = new Brand({
            name: req.body.name,
        })
        const brandSaved = await newBrand.save()
        res.status(201).json(brandSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the brand.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Brand.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The brand with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the brand.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Brand.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The brand with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the brand.'
        })
    }
}