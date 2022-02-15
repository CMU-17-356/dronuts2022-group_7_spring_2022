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

<<<<<<< HEAD
export default mongoose.model<Employee>('Employee', employeeSchema);
=======
export default mongoose.model<EmployeeInterface>('Employee', employeeSchema);
>>>>>>> d8829d878a39604f4f9d6547577ca6c0623e2c51
