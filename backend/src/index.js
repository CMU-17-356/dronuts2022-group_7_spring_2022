"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var port = 3001;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// import fake data
app.get('/', function (req, res) {
    res.status(200).send('Hello 17-356 People!');
});
app.post('/addTodo', function (req, res) {
    console.log(req.body);
    res.status(200).send('New Todo received!');
});
app.listen(port, function () {
    console.log("Todo-App listening on localhost:".concat(port));
});


