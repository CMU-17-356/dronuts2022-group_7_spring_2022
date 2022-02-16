import mongoose, { Schema, Model, Document } from 'mongoose';

export interface DonutInterface extends Document
{
    name : string;
    description : string;
    image : string; // path to donut images saved
    price : number; 
    quantity : number; //  number of donuts in inventory
}; 

const donutSchema = new Schema<DonutInterface>(
    {
        name : { type: String, required: true }, 
        description: String, 
        image : String, // path to donut images saved
        price: Number, 
        quantity: Number, //  number of donuts in inventory
     });

export const DonutModel: Model<DonutInterface> = mongoose.model<DonutInterface>('Donut', donutSchema);