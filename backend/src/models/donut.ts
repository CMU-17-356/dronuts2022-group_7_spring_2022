import mongoose, { Schema, Model, Document } from 'mongoose';

<<<<<<< HEAD
export interface DonutInterface {
=======
export interface DonutInterface extends Document
{
>>>>>>> 752c34ba18783bcb90b1d85492263e817af604e7
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

<<<<<<< HEAD
export default mongoose.model<DonutInterface>('Donut', donutSchema);
=======
export const DonutModel: Model<DonutInterface> = mongoose.model<DonutInterface>('Donut', donutSchema);
>>>>>>> 752c34ba18783bcb90b1d85492263e817af604e7
