"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.OrderModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
;
var orderSchema = new mongoose_1.Schema({
    customer_id: mongoose_1.Schema.Types.ObjectId,
    donuts: [
        {
            donut_id: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Donut' },
            quantity: { type: Number, required: true } // integer represents the quantity of orders that is been ordered
        }
    ],
    cost: Number,
    drone_id: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Drone' },
    time_placed: { type: Date },
    time_picked: Date,
    time_delivered: Date,
});
// interface orderQueryHelpers {
//     byCustomer_id(customer_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
//     byDrone_id(drone_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
//     byDonut_id(donut_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers;
// }
// orderSchema.query.byCustomer_id = function(customer_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ customer_id: customer_id });
// };
// orderSchema.query.byDrone_id = function(drone_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ drone_id: drone_id });
// };
// orderSchema.query.byDonut_id = function(donut_id: Types.ObjectId): Query<any, Document<OrderInterface>> & orderQueryHelpers {
//     return this.find({ donut_id: donut_id });
// };
exports.OrderModel = mongoose_1.default.model('Order', orderSchema);
