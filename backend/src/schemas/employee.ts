import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema(
{
    username : String, 
    password : String, // Salted, Hashed Password.,
    full_name : String, 
    position : String
});

export default employeeSchema;