import mongoose, { Schema, Model, Document, Query, Types } from 'mongoose';


export interface order_count {
    donut_id: Types.ObjectId,
    quantity: Number
}

export interface OrderInterface extends Document{
    customer_id : Types.ObjectId; 
    donuts : Array<order_count>;
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
            donut_id: Schema.Types.ObjectId, // String refers to order objects
            quantity: Number// integer represents the quantity of orders that is been ordered
            }
        ],
        cost : Number,
        drone_id : Schema.Types.ObjectId,
        time_placed : Date,
        time_picked : Date,
        time_delivered : Date,
});

// interface orderQueryHelpers {
//     byCustomer_id(customer_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
//     byDrone_id(drone_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
//     byDonut_id(donut_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
// }

// orderSchema.query.byCustomer_id = function(customer_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ customer_id: customer_id });
// };

// orderSchema.query.byDrone_id = function(drone_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ drone_id: drone_id });
// };

// orderSchema.query.byDonut_id = function(donut_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ donut_id: donut_id });
// };

export const OrderModel: Model<OrderInterface> = mongoose.model<OrderInterface>('Order', orderSchema);
