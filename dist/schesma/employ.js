"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EmploySchema = new mongoose_1.default.Schema({
    ma: Number,
    ten: String,
    tuoi: Number,
    luong: Number,
    phongban: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Branch" }
});
const employModel = mongoose_1.default.model('employs', EmploySchema);
exports.default = employModel;
//# sourceMappingURL=employ.js.map