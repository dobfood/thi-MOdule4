"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employ_1 = __importDefault(require("../schesma/employ"));
const branch_1 = __importDefault(require("../schesma/branch"));
const employ_2 = __importDefault(require("../schesma/employ"));
class employController {
    static async show(req, res) {
        const employs = await employ_1.default.find({});
        return res.render("list", { employs: employs });
    }
    static async getAdd(req, res) {
        res.render('/create');
    }
    static async postAdd(req, res) {
        const branch = new branch_1.default({
            ten: req.body.name
        });
        await branch.save();
        const employs = new employ_1.default({
            ma: req.body.code,
            ten: req.body.name,
            tuoi: req.body.age,
            luong: req.body.price,
            phongban: branch
        });
        await employs.save();
        res.redirect('/');
    }
    static async delete(req, res) {
        let id = req.params.id;
        const idEmploy = await employ_1.default.findOne({ _id: id }).populate('phongban');
        const branch = await branch_1.default.findOne({ _id: idEmploy.phongban });
        await branch.remove();
        await idEmploy.remove();
        res.redirect('/');
    }
    static async getUpdate(req, res) {
        let id = req.params.id;
        const Employ = await employ_2.default.findOne({ id: id }).populate('phongban');
        return res.render('update', { employ: Employ });
    }
    static async postUpdate(req, res) {
        let id = req.params.id;
        const employUpdate = await employ_1.default.findOne({ _id: id }).populate('phongban');
        employUpdate.ma = req.body.code;
        employUpdate.ten = req.body.name;
        employUpdate.tuoi = req.body.age;
        employUpdate.luong = req.body.price;
        const branch = await branch_1.default.findOne({ _id: employUpdate.phongban._id });
        branch.ten = req.body.name;
        await employUpdate.save();
        return res.redirect('/');
    }
    static async Detail(req, res) {
        let id = req.params.id;
        const employs = await employ_2.default.findOne({ _id: id }).populate('phongban');
        res.render('detail', { employs: employs });
    }
}
exports.default = employController;
//# sourceMappingURL=employController.js.map