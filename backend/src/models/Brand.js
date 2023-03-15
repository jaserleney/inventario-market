import { Schema, model } from "mongoose";

const brandSchema = new Schema(
    {
        name: {
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

export default model('Brand', brandSchema)