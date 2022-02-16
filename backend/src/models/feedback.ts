import mongoose, { Schema, Model, Document } from 'mongoose';

export interface FeedbackInterface extends Document
{
    customer_id : Schema.Types.ObjectId; 
    order_id : Schema.Types.ObjectId;
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

export const FeedbackModel: Model<FeedbackInterface> = mongoose.model<FeedbackInterface>('Feedback', feedbackSchema);