import mongoose, { Schema, Model, Document } from 'mongoose';

export interface CustomerInterface extends Document
{
    username : string; 
    password : string;
    full_name : string; 
    addresses: Array<string>;
}; 


const customerSchema = new Schema<CustomerInterface>(
{
    username : { type: String, required: true }, 
    password : { type: String, required: true },
    full_name : String, 
    addresses: [String]
});


export const CustomerModel: Model<CustomerInterface> = mongoose.model('Customer', customerSchema);
