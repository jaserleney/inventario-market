import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        serial: {
            type: Number,
            required: true,
            unique: true,
            trim: true
        },
        brand_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Brand', 
            required: true, 
            trim: true},
        ref_id: { 
            type: Schema.Types.ObjectId, 
            ref: 'Ref', 
            required: true, 
            trim: true 
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        status: { type: String, enum: ['Nuevo', 'Usado'], default: 'Nuevo' }
    },
    {   
        versionKey: false,
        timestamps: false,
    }
);

export default model('Product', productSchema)