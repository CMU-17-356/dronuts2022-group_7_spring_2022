"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDonutById = exports.upsertDonut = exports.listAllDonut = void 0;
var donut_1 = require("./models/donut");
var listAllDonut = function (req, res) {
    var donut = donut_1.DonutModel.find({}, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.listAllDonut = listAllDonut;
var upsertDonut = function (req, res) {
    var filter = { _id: req.params.id };
    var update = req.body;
    var donut = donut_1.DonutModel.findOneAndUpdate(filter, update, { new: true }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.upsertDonut = upsertDonut;
var deleteDonutById = function (req, res) {
    var donut = donut_1.DonutModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Book");
        }
    });
};
exports.deleteDonutById = deleteDonutById;
