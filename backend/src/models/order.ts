<<<<<<< HEAD
import mongoose, { Schema, Model, Document } from 'mongoose';

interface donut_count {
    donut_id: Schema.Types.ObjectId,
    quantity: Number
}

export interface OrderInterface extends Document
{
    customer_id : Schema.Types.ObjectId; 
=======
import mongoose, { Schema, Model, Document, Types } from 'mongoose';


export interface donut_count {
    donut_id: Types.ObjectId,
    quantity: Number
}

export interface OrderInterface extends Document{
    customer_id : Types.ObjectId; 
>>>>>>> 70425c1bc1eab84c199520c827a958d44e83f2ff
    donuts : Array<donut_count>;
    cost : number; 
    drone_id: Schema.Types.ObjectId;
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
<<<<<<< HEAD
        }],
        cost : Schema.Types.Decimal128,
=======
            }
        ],
        cost : Number,
>>>>>>> 70425c1bc1eab84c199520c827a958d44e83f2ff
        drone_id : Schema.Types.ObjectId,
        time_placed : Date,
        time_picked : Date,
        time_delivered : Date,
});

<<<<<<< HEAD
export const OrderModel: Model<OrderInterface> = mongoose.model<OrderInterface>('Order', orderSchema);
=======
export const OrderModel: Model<OrderInterface> = mongoose.model<OrderInterface>('Order', orderSchema);
>>>>>>> 70425c1bc1eab84c199520c827a958d44e83f2ff
