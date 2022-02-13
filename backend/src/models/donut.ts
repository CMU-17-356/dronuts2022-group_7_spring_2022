import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Donut {
    name : string;
    description : string;
    image : string; // path to donut images saved
    price : number; 
    quantity : number; //  number of donuts in inventory
}; 

const donutSchema = new Schema(
    {
        name :  String, 
        description: String, 
        image : String, // path to donut images saved
        price: Number, 
        quantity: Number, //  number of donuts in inventory
     });

export default mongoose.model<Donut>('Donut', donutSchema);