import mongoose from 'mongoose';
const { Schema } = mongoose;

const feedbackSchema = new Schema(
    {
        customer_id : Schema.Types.ObjectId,
        order_id : Schema.Types.ObjectId,
        rating : Schema.Types.Decimal128, // out of 5
        feedback : String 
     });

export default feedbackSchema;