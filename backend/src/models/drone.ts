import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Drone
{
   orders : Array<number>; // Reference to other ORDER objects
   battery : number; // Out of 1.0
   status : string; // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
};
   
const droneSchema = new Schema(
{
   orders : [{object_id: Schema.Types.ObjectId }], // Reference to other ORDER objects
   battery : Number, // Out of 1.0
   status : String // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
});

export default mongoose.model<Drone>('Drone', droneSchema);