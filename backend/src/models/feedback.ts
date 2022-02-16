import mongoose, { Schema, Model, Document, Types } from 'mongoose';

export interface FeedbackInterface extends Document {
    customer_id : Types.ObjectId; 
    order_id : Types.ObjectId;
    rating : number; 
    feedback: string;
}; 

const feedbackSchema = new Schema<FeedbackInterface>(
    {
        customer_id : Schema.Types.ObjectId,
        order_id : Schema.Types.ObjectId,
        rating : Number, // out of 5
        feedback : String 
     });

export const FeedbackModel: Model<FeedbackInterface> = mongoose.model<FeedbackInterface>('Feedback', feedbackSchema);