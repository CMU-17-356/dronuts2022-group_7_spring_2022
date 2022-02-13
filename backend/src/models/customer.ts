import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Customer {
    username : string; 
    password : string; // Salted, Hashed Password., 
    full_name : string; 
    addresses: Array<string>;
}; 


const customerSchema = new Schema<Customer>(
{
    username : String, 
    password : String, // Salted, Hashed Password., 
    full_name : String, 
    addresses: [{ address: String }]
});


export default mongoose.model<Customer>('Customer', customerSchema);