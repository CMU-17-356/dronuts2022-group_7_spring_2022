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
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var donut_controllers = __importStar(require("./controllers/donut_controllers"));
var order_controllers = __importStar(require("./controllers/order_controllers"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 8080;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Donut Controllers
app.get('/donuts', (0, cors_1.default)(), donut_controllers.listAllDonuts);
app.get('/donuts/:id', (0, cors_1.default)(), donut_controllers.getDonutById);
app.put('/donuts/', (0, cors_1.default)(), donut_controllers.createDonut);
app.post('/donuts/', (0, cors_1.default)(), donut_controllers.createDonut);
app.put('/donuts/:id', (0, cors_1.default)(), donut_controllers.upsertDonutById);
app.delete('/donuts/:id', (0, cors_1.default)(), donut_controllers.deleteDonutById);
app.delete('/donuts', (0, cors_1.default)(), donut_controllers.deleteDonutByName);
// Customer Controllers
// Employee Controllers
// Orders
app.get('/orders', order_controllers.listAllOrders);
app.get('/orders/active', order_controllers.getActiveOrder);
app.get('/orders/by_id/:id', order_controllers.getOrderById);
app.get('/orders/incomplete', order_controllers.listIncompleteOrders);
app.get('/orders/pending', order_controllers.listPendingOrders);
app.get('/orders/past', order_controllers.listPastOrders);
app.put('/orders/', order_controllers.createOrder);
// Not necessarily deprecated but shouldn't use
app.put('/orders/add_quantity/:id', order_controllers.AddQuantityById);
// Not necessarily deprecated but shouldn't use
app.put('/orders/add_item/:id', order_controllers.AddItemById);
app.post('/orders/add_donuts/:id', order_controllers.AddDonutList);
app.post('/orders/', order_controllers.createOrder);
app.put('/orders/:id', order_controllers.upsertOrderById);
app.post('/orders/:id', order_controllers.upsertOrderById);
app.delete('/orders/:id', order_controllers.deleteOrderById);
app.delete('/orders/remove_item/:id', order_controllers.RemoveItemById);
app.listen(port, function () {
    console.log('Dronuts-App listening on localhost:' + port);
});
main().catch(function (err) { return console.log(err); });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var uri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uri = "mongodb+srv://ruitaol:3Q1T5l5ZK3gahNxe@cluster0.t124k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
                    return [4 /*yield*/, mongoose_1.default.connect(uri)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
