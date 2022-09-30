"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const branch = new mongoose_1.default.Schema({
    ten: String,
});
const Branch = mongoose_1.default.model('Branch', branch);
exports.default = Branch;
//# sourceMappingURL=branch.js.map