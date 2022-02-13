import mongoose from 'mongoose';
const { Schema } = mongoose;

const droneSchema = new Schema(
{
   orders : [{object_id: Schema.Types.ObjectId }], // Reference to other ORDER objects
   battery : Schema.Types.Decimal128, // Out of 1.0
   status : String // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
});

export default mongoose.model('Drone', droneSchema);