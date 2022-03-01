import mongoose, { Schema, Model, Document, Query } from 'mongoose';

export interface DroneInterface extends Document
{
   orders : Array<Schema.Types.ObjectId>; // Reference to other ORDER objects
   battery : number; // Out of 1.0
   status : string; // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
};
   
const droneSchema = new Schema<DroneInterface>(
{
   orders : [ { object_id: {type: Schema.Types.ObjectId, required: true, ref: 'Order'} } ], // Reference to other ORDER objects
   battery : {type:Number, min: 0, max: 1}, // Out of 1.0
   status : {type:String, enum:["recharging", "delivering", "returning"]} // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
});

// interface droneQueryHelpers {
//    byOrders(orders: Schema.Types.ObjectId): Query<any, Document<DroneInterface>> & droneQueryHelpers;
//    byBatteryRange(upper: number, lower: number): Query<any, Document<DroneInterface>> & droneQueryHelpers;
//    byStatus(status: string): Query<any, Document<DroneInterface>> & droneQueryHelpers;
// }

// droneSchema.query.byOrders = function(order_id: Schema.Types.ObjectId): Query<any, Document<DroneInterface>> & droneQueryHelpers {
//    return this.find({ orders: order_id });
// };

// droneSchema.query.byBatteryRange = function(upper: number, lower: number): Query<any, Document<DroneInterface>> & droneQueryHelpers {
//    return this.find({ battery: { $gte: lower, $lte: upper } });
// };

// droneSchema.query.byStatus = function(status: string): Query<any, Document<DroneInterface>> & droneQueryHelpers {
//    return this.find({ status: status });
// };

export const DroneModel: Model<DroneInterface> = mongoose.model<DroneInterface>('Drone', droneSchema);