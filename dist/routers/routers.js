"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employController_1 = __importDefault(require("../controller/employController"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const router = express_1.default.Router();
router.get('/', employController_1.default.show);
router.get('/create', employController_1.default.getAdd);
router.post('/create', upload.none(), employController_1.default.postAdd);
router.get('/delete/:id', employController_1.default.delete);
router.get('/update/:id', employController_1.default.getUpdate);
router.get('/update', employController_1.default.getUpdate);
router.get('/detail/:id', employController_1.default.Detail);
exports.default = router;
//# sourceMappingURL=routers.js.map