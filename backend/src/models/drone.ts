import mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';

export interface DroneInterface
{
   orders : Array<Types.ObjectId>; // Reference to other ORDER objects
   battery : number; // Out of 1.0
   status : string; // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
};
   
const droneSchema = new Schema<DroneInterface>(
{
   orders : [{object_id: Types.ObjectId, required : true, ref: 'Order'}], // Reference to other ORDER objects
   battery : Number, // Out of 1.0
   status : String // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
});

export default mongoose.model<DroneInterface>('Drone', droneSchema);