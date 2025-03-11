import { Schema, model, connect } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
    name: {type: String},
    brand: {type : String},
    price : {type : Number},
    type: {type: String},
    description : {type : String},
    quantity: {type : Number},
    inStock : {type : Boolean},
    createdAt : {type : String},
    updateAt : {type : String},
})