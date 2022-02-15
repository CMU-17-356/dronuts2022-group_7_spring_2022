import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Employee {
    username : string; 
    password : string;
    full_name : string; 
    position: string;
}; 

const employeeSchema = new Schema(
{
    username : { type: String, required: true }, 
    password : { type: String, required: true },
    full_name : String, 
    position : String
});

export default mongoose.model<Employee>('Employee', employeeSchema);