import mongoose, { Schema, Model, Document, Query } from 'mongoose';

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

// interface customerQueryHelpers {
//     byUsername(username: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
//     byFull_name(full_name: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
//     byAddress(position: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
// }

// customerSchema.query.byUsername = function(username: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ username: username });
// };

// customerSchema.query.byFull_name = function(full_name: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ full_name: full_name });
// };

// customerSchema.query.byAddress = function(address: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ addresses: address });
// };

export const CustomerModel: Model<CustomerInterface> = mongoose.model('Customer', customerSchema);
