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
exports.DonutModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
;
var donutSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: String,
    image: String,
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }, //  number of donuts in inventory
});
// interface donutQueryHelpers {
//     byName(name: string): Query<any, Document<DonutInterface>> & donutQueryHelpers;
//     byDescription(description: string): Query<any, Document<DonutInterface>> & donutQueryHelpers;
//     byPriceRange(upper: number, lower: number): Query<any, Document<DonutInterface>> & donutQueryHelpers;
// }
// donutSchema.query.byName = function(name: string): Query<any, Document<DonutInterface>> & donutQueryHelpers {
//     return this.find({ name: name });
// };
// donutSchema.query.byDescription = function(description: string): Query<any, Document<DonutInterface>> & donutQueryHelpers {
//     return this.find({ description: description });
// };
// donutSchema.query.byPriceRange = function(upper: number, lower: number): Query<any, Document<DonutInterface>> & donutQueryHelpers {
//     return this.find({ price: { $gte: lower, $lte: upper } });
// };
exports.DonutModel = mongoose_1.default.model('Donut', donutSchema);
