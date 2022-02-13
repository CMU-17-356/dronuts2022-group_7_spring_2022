import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Customer {
    username : string; 
    password : string;
    full_name : string; 
    addresses: Array<string>;
}; 


const customerSchema = new Schema<Customer>(
{
    username : { type: String, required: true }, 
    password : { type: String, required: true },
    full_name : String, 
    addresses: [{ address: String }]
});


export default mongoose.model<Customer>('Customer', customerSchema);
