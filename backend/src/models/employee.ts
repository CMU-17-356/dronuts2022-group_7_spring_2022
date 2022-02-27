import mongoose, { Schema, Model, Document, Query } from 'mongoose';

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

interface employeeQueryHelpers {
    byUsername(username: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers;
    byFull_name(full_name: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers;
    byPosition(position: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers;
}

employeeSchema.query.byUsername = function(username: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers {
    return this.find({ username: username });
};

employeeSchema.query.byFull_name = function(full_name: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers {
    return this.find({ full_name: full_name });
};

employeeSchema.query.byPosition = function(position: string): Query<any, Document<EmployeeInterface>> & employeeQueryHelpers {
    return this.find({ position: position });
};

export const EmployeeModel: Model<EmployeeInterface> = mongoose.model<EmployeeInterface>('Employee', employeeSchema);
