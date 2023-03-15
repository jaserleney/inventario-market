import { Schema, model } from "mongoose";

const assignProductSchema = new Schema(
    {
        employee_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Employee', 
            required: true, 
            trim: true
        },
        product_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Product', 
            required: true,
            unique: true, 
            trim: true 
        },
        description: {
            type: String,
            required: true,
            trim: true
        }
    },
    {   
        versionKey: false,
        timestamps: true,
    }
);

export default model('AssignProduct', assignProductSchema)