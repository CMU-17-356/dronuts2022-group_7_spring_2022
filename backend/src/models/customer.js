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
exports.CustomerModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
;
var customerSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    full_name: String,
    addresses: [String]
});
// interface customerQueryHelpers {
//     byUsername(username: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
//     byFull_name(full_name: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
//     byAddress(position: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers;
// }
// customerSchema.query.byUsername = function(username: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ username: username });
// };
// customerSchema.query.byFull_name = function(full_name: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ full_name: full_name });
// };
// customerSchema.query.byAddress = function(address: string): Query<any, Document<CustomerInterface>> & customerQueryHelpers {
//     return this.find({ addresses: address });
// };
exports.CustomerModel = mongoose_1.default.model('Customer', customerSchema);
