import { Schema, model, connect } from 'mongoose';

export type TProduct = {
    name: string,
    brand: string,
    price : number,
    type: string,
    description : string,
    quantity: number,
    inStock : boolean,
    createdAt? : Date,
    updatedAt? : Date,
  }

  