import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema(
{
    username : String, 
    password : String, // Salted, Hashed Password., 
    full_name : String, 
    addresses: [{ address: String }]
});

export default mongoose.model('Customer', customerSchema);