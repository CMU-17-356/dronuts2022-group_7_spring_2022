import mongoose, { Schema, Model, Document, Types } from 'mongoose';

export interface FeedbackInterface extends Document {
    customer_id : Types.ObjectId; 
    order_id : Types.ObjectId;
    rating : number; 
    feedback: string;
}; 

const feedbackSchema = new Schema<FeedbackInterface>(
    {
        customer_id : {type: Schema.Types.ObjectId, required: true, ref: 'Customer'},
        order_id : {type: Schema.Types.ObjectId, required: true, ref: 'Order'},
        rating : {type: Number, min: 0, max: 5, required: true}, // out of 5
        feedback : String 
     });

export const FeedbackModel: Model<FeedbackInterface> = mongoose.model<FeedbackInterface>('Feedback', feedbackSchema);