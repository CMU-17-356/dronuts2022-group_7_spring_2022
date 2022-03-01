"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderById = exports.createOrder = exports.AddItemOrderById = exports.upsertOrderById = exports.listPastOrders = exports.listPendingOrders = exports.listIncompleteOrders = exports.getOrderById = exports.listAllOrders = void 0;
var order_1 = require("../models/order");
var donut_1 = require("../models/donut");
var listAllOrders = function (req, res) {
    var orders = order_1.OrderModel.find({}, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};
exports.listAllOrders = listAllOrders;
var getOrderById = function (req, res) {
    var donut = order_1.OrderModel.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};
exports.getOrderById = getOrderById;
var listIncompleteOrders = function (req, res) {
    var orders = order_1.OrderModel.find({ time_picked: null, time_delivered: null, time_placed: null }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};
exports.listIncompleteOrders = listIncompleteOrders;
var listPendingOrders = function (req, res) {
    var date_now = new Date();
    var orders = order_1.OrderModel.find({ time_picked: null, time_delivered: null, time_placed: { $lte: date_now } }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};
exports.listPendingOrders = listPendingOrders;
var listPastOrders = function (req, res) {
    // Current date and time
    var date_now = new Date();
    var orders = order_1.OrderModel.find({ time_delivered: { $lt: date_now } }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};
exports.listPastOrders = listPastOrders;
var upsertOrderById = function (req, res) {
    var order = order_1.OrderModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send("Successfully Upserted Order with _id " + result._id);
        }
    });
};
exports.upsertOrderById = upsertOrderById;
var AddItemOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order_update, updated_object, updated_donuts, final_cost, i, donut, cost_update;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                order_update = order_1.OrderModel.updateOne({ _id: req.params.id }, { $push: { donuts: { "donut_id": req.body.donut_id, "quantity": req.body.quantity } } }, { new: true, upsert: true }, function (err, result) {
                    if (err) {
                        res.status(400).send(err);
                    }
                    else {
                        res.status(200).send("Successfully Added Donut " + req.body.donut_id + " to order " + req.params.id);
                    }
                });
                return [4 /*yield*/, order_1.OrderModel.findOne({ _id: req.params.id })];
            case 1:
                updated_object = _a.sent();
                updated_donuts = updated_object === null || updated_object === void 0 ? void 0 : updated_object.donuts;
                final_cost = 0;
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < updated_donuts.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, donut_1.DonutModel.findById(updated_donuts[i].donut_id)];
            case 3:
                donut = _a.sent();
                final_cost = final_cost + donut.cost * updated_donuts[i].quantity;
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                cost_update = order_1.OrderModel.updateOne({ _id: req.params.id }, { price: final_cost }, { new: true, upsert: true }, function (err, result) {
                    if (err) {
                        res.status(400).send(err);
                    }
                    else {
                        res.status(200).send("Successfully Added Donut " + req.body.donut_id + " to order " + req.params.id);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.AddItemOrderById = AddItemOrderById;
var createOrder = function (req, res) {
    var donut = new order_1.OrderModel(req.body);
    donut.save(function (err, result) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.status(200).send("Successfully Created Order with _id " + result._id);
            }
            return [2 /*return*/];
        });
    }); });
};
exports.createOrder = createOrder;
var deleteOrderById = function (req, res) {
    var donut = order_1.OrderModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            console.log(req.body);
            res.status(200).send("Successfully Deleted Order");
        }
    });
};
exports.deleteOrderById = deleteOrderById;
// Returns the current cart orders NEED AWAIT
// export let currentCartOrders = (req: Request, res: Response) => {
//     let filter = { _id:req.params.id};
//     let update = req.body;
//     let order = OrderModel.findOneAndUpdate(filter, update, {new: true}, (err: any, result: any) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     });
// };
