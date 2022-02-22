import mongoose, { Schema, Model, Document } from 'mongoose';

export interface EmployeeInterface extends Document
{
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

export const EmployeeModel: Model<EmployeeInterface> = mongoose.model<EmployeeInterface>('Employee', employeeSchema);
