"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertOrders = exports.listPastOrders = exports.listPendingOrders = exports.listAllOrders = void 0;
var order_1 = require("../models/order");
var listAllOrders = function (req, res) {
    var orders = order_1.OrderModel.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.listAllOrders = listAllOrders;
var listPendingOrders = function (req, res) {
    var orders = order_1.OrderModel.find({ time_picked: null, time_delivered: null }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.listPendingOrders = listPendingOrders;
var listPastOrders = function (req, res) {
    // Current date and time
    var date_now = new Date();
    var orders = order_1.OrderModel.find({ time_delivered: { $lt: date_now } }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.listPastOrders = listPastOrders;
var upsertOrders = function (req, res) {
    var filter = { _id: req.params.id };
    var update = req.body;
    var order = order_1.OrderModel.findOneAndUpdate(filter, update, { new: true }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.upsertOrders = upsertOrders;
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
