import { Schema, model, connect } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
    name: {type: String, required: true, unique: true},
    brand: {type : String, required: true},
    price : {type : Number, required: true},
    type: {type: String, required: true},
    description : {type : String, required: true},
    quantity: {type : Number, required: true},
    inStock : {type : Boolean, required: true},
    
},
{ timestamps: true, versionKey: false }
)

export const ProductModel = model<TProduct>('Product', productSchema);