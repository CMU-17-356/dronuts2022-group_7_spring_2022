import mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';

interface FeedbackInterface {
    customer_id : Types.ObjectId; 
    order_id : Types.ObjectId;
    rating : number; 
    feedback: string;
}; 

const feedbackSchema = new Schema<FeedbackInterface>(
    {
        customer_id : Schema.Types.ObjectId,
        order_id : Schema.Types.ObjectId,
        rating : Schema.Types.Decimal128, // out of 5
        feedback : String 
     });

export default mongoose.model<FeedbackInterface>('Feedback', feedbackSchema);