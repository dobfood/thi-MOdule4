"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routers_1 = __importDefault(require("./src/routers/routers"));
const PORT = 2212;
mongoose_1.default.connect('mongodb://localhost:27017/thimodule4').then(() => {
    console.log("connect DB success");
}).catch((err) => {
    throw err;
});
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', routers_1.default);
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map