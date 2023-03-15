import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true  
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    {   
        versionKey: false,
        timestamps: false,
    }
);

export default model('Employee', employeeSchema)