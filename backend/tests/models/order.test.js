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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testDB = __importStar(require("../utility"));
var mongoose_1 = __importDefault(require("mongoose"));
var order_1 = require("../../src/models/order");
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, testDB.connect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, testDB.clearDatabase()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, testDB.closeDatabase()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe('Order test', function () {
    var _this = this;
    var new_customer_id = new mongoose_1.default.Types.ObjectId();
    var new_drone_id = new mongoose_1.default.Types.ObjectId();
    var new_donut_id_1 = new mongoose_1.default.Types.ObjectId();
    var new_donut_id_2 = new mongoose_1.default.Types.ObjectId();
    var donut_1 = { donut_id: new_donut_id_1, quantity: 5 };
    var donut_2 = { donut_id: new_donut_id_2, quantity: 7 };
    var a_date = new Date();
    it('should take on assigned values', function () {
        var order = new order_1.OrderModel();
        order.customer_id = new_customer_id;
        order.donuts = [donut_1, donut_2];
        order.drone_id = new_drone_id;
        order.time_placed = a_date;
        order.time_picked = a_date;
        order.time_delivered = a_date;
        console.log(order.customer_id);
        expect(order.customer_id).toEqual(new_customer_id);
        expect(order.donuts[0].donut_id).toBe(new_donut_id_1);
        expect(order.donuts[0].quantity).toBe(5);
        expect(order.donuts[1].donut_id).toBe(new_donut_id_2);
        expect(order.donuts[1].quantity).toBe(7);
        expect(order.time_placed).toEqual(a_date);
        expect(order.time_picked).toEqual(a_date);
        expect(order.time_delivered).toEqual(a_date);
    });
    it('can be created correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var order, OrderInDb;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = new order_1.OrderModel();
                    // set some test properties
                    order.customer_id = new_customer_id;
                    order.donuts = [donut_1, donut_2];
                    order.drone_id = new_drone_id;
                    order.time_placed = a_date;
                    order.time_picked = a_date;
                    order.time_delivered = a_date;
                    // save test post to in-memory db
                    return [4 /*yield*/, order.save()];
                case 1:
                    // save test post to in-memory db
                    _a.sent();
                    return [4 /*yield*/, order_1.OrderModel.findOne({
                            username: 'Test UserName',
                        }).exec()];
                case 2:
                    OrderInDb = _a.sent();
                    console.log('Order found from memory-db', OrderInDb);
                    // check that title is expected
                    expect(OrderInDb).toBeDefined();
                    if (OrderInDb) {
                        expect(order.customer_id).toEqual(new_customer_id);
                        expect(order.donuts[0].donut_id).toBe(new_donut_id_1);
                        expect(order.donuts[0].quantity).toBe(5);
                        expect(order.donuts[1].donut_id).toBe(new_donut_id_2);
                        expect(order.donuts[1].quantity).toBe(7);
                        expect(order.time_placed).toEqual(a_date);
                        expect(order.time_picked).toEqual(a_date);
                        expect(order.time_delivered).toEqual(a_date);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
