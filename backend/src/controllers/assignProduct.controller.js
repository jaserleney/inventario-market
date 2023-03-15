import Assign from '../models/AssignProduct.js'

export const getAll = async (req, res) =>{
    try {
        const assigns = await Assign.find()
        .populate('employee_id')
        .populate('product_id')
        res.status(200).json(assigns)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the assigns.'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const assign = await Assign.findById(req.params.id)
        .populate('employee_id')
        .populate('product_id')
        res.json(assign)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the assign.'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.employee_id || !req.body.product_id || !req.body.description){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newAssign = new Assign({
            employee_id: req.body.employee_id,
            product_id: req.body.product_id,
            description: req.body.description
        })
        const assignSaved = await newAssign.save()
        res.status(201).json(assignSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the assign.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Assign.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The assign with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the assign.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Assign.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The assign with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the assign.'
        })
    }
}