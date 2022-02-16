import mongoose from 'mongoose';
import { Employee } from '../../helpers';
const { Schema } = mongoose;

interface EmployeeInterface {
    username : string; 
    password : string;
    full_name : string; 
    position: string;
}; 

const employeeSchema = new Schema<EmployeeInterface>(
{
    username : { type: String, required: true }, 
    password : { type: String, required: true },
    full_name : String, 
    position : String
});

export default mongoose.model<EmployeeInterface>('Employee', employeeSchema);