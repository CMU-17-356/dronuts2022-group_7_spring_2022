import mongoose from 'mongoose';
const { Schema } = mongoose;

const donutSchema = new Schema(
    {
        name :  String, 
        description: String, 
        image : String, // path to donut images saved
        price: Schema.Types.Decimal128, 
        quantity: Number, //  number of donuts in inventory
     });

export default donutSchema;