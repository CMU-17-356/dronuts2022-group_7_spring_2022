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
Object.defineProperty(exports, "__esModule", { value: true });
var testDB = __importStar(require("../utility"));
var customer_1 = require("../../src/models/customer");
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
describe('Customer test', function () {
    var _this = this;
    it('should take on assigned values', function () {
        var m = new customer_1.CustomerModel();
        m.username = 'Test UserName';
        m.password = 'Password';
        m.full_name = "John Snow";
        m.addresses = ["123 Forbes Ave", "321 Murray Ave"];
        console.log(m.addresses);
        expect(m.username).toEqual('Test UserName');
        expect(m.password).toEqual('Password');
        expect(m.full_name).toEqual('John Snow');
        expect(m.addresses).toContain("123 Forbes Ave");
        expect(m.addresses).toContain("321 Murray Ave");
    });
    it('can be created correctly', function () { return __awaiter(_this, void 0, void 0, function () {
        var customer, CustomerInDb;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer = new customer_1.CustomerModel();
                    // set some test properties
                    customer.username = 'Test UserName';
                    customer.password = 'Password';
                    customer.full_name = "John Snow";
                    customer.addresses = ["123 Forbes Ave", "321 Murray Ave"];
                    // save test post to in-memory db
                    return [4 /*yield*/, customer.save()];
                case 1:
                    // save test post to in-memory db
                    _a.sent();
                    return [4 /*yield*/, customer_1.CustomerModel.findOne({
                            username: 'Test UserName'
                        }).exec()];
                case 2:
                    CustomerInDb = _a.sent();
                    console.log('Customer found from memory-db', CustomerInDb);
                    // check that title is expected
                    expect(CustomerInDb).toBeDefined();
                    if (CustomerInDb) {
                        expect(customer.username).toEqual('Test UserName');
                        expect(customer.password).toEqual('Password');
                        expect(customer.full_name).toEqual('John Snow');
                        expect(customer.addresses).toContain("123 Forbes Ave");
                        expect(customer.addresses).toContain("321 Murray Ave");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
