"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
class HelloController {
    hello() {
        return 'Hello world!';
    }
}
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/hello'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", String)
], HelloController.prototype, "hello", null);
exports.HelloController = HelloController;
//# sourceMappingURL=hello-world.controller.js.map