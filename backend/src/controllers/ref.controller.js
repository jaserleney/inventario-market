import Ref from '../models/Ref.js'

export const getAll = async (req, res) =>{
    try {
        const refs = await Ref.find()
        res.status(200).json(refs)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the references'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const ref = await Ref.findById(req.params.id)
        res.json(ref)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the reference'
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
        const newRef = new Ref({
            name: req.body.name,
        })
        const refSaved = await newRef.save()
        res.status(201).json(refSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the reference.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Ref.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The reference with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the reference.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Ref.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The reference with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the reference.'
        })
    }
}