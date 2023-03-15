import Employee from '../models/Employee.js'

export const getAll = async (req, res) =>{
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the employees'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the employee'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.name || !req.body.email || !req.body.lastname){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newEmployee = new Employee({
            name: req.body.name,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
        })
        const employeeSaved = await newEmployee.save()
        res.status(201).json(employeeSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the employee.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The employee with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the employee.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The employee with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the employee.'
        })
    }
}