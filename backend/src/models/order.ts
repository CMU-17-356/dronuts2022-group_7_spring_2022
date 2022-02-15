import mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';

interface donut_count {
    donut_id: Types.ObjectId,
    quantity: Number
}

interface OrderInterface {
    customer_id : Types.ObjectId; 
    donuts : Array<donut_count>;
    cost : number; 
    drone_id: Types.ObjectId;
    time_placed: Date;
    time_picked: Date;
    time_delivered: Date;
}; 

const orderSchema = new Schema<OrderInterface>(
    {
        customer_id : Schema.Types.ObjectId,
        donuts : [
         {
            donut_id: Schema.Types.ObjectId, // String refers to donut objects
            quantity: Number// integer represents the quantity of donuts that is been ordered
     
             }
        ],
        cost : Schema.Types.Decimal128,
        drone_id : Schema.Types.ObjectId,
        time_placed : Date,
        time_picked : Date,
        time_delivered : Date,
     });

export default mongoose.model<OrderInterface>('Order', orderSchema);