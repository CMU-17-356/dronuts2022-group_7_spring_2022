import mongoose, { Schema, Model, Document } from 'mongoose';

interface donut_count {
    donut_id: Schema.Types.ObjectId,
    quantity: Number
}

export interface OrderInterface extends Document
{
    customer_id : Schema.Types.ObjectId; 
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
        }],
        cost : Schema.Types.Decimal128,
        drone_id : Schema.Types.ObjectId,
        time_placed : Date,
        time_picked : Date,
        time_delivered : Date,
});

export const OrderModel: Model<OrderInterface> = mongoose.model<OrderInterface>('Order', orderSchema);