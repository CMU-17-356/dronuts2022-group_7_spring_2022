"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroneModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
;
var droneSchema = new mongoose_1.Schema({
    orders: [{ object_id: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Order' } }],
    battery: { type: Number, min: 0, max: 1 },
    status: { type: String, enum: ["recharging", "delivering", "returning"] } // Could also be an enumerated type, with statuses ranging between “recharging”, “delivering”, “returning”, etc.
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
exports.DroneModel = mongoose_1.default.model('Drone', droneSchema);
