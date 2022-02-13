import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        customer_id : Schema.Types.ObjectId,
        donuts : [
         {
            donut_id: String, // String refers to donut objects
            quantity: Number// integer represents the quantity of donuts that is been ordered
     
             }
        ],
        cost : Schema.Types.Decimal128,
        drone_id : Schema.Types.ObjectId,
        time_placed : Date,
        time_picked : Date,
        time_delivered : Date,
     });

export default mongoose.model('Order', orderSchema);