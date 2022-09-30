import employModel from "../schesma/employ";
import Branch from "../schesma/branch";
import employ from "../schesma/employ";

class employController {
    static async show(req, res) {
        const employ = await employModel.find({}).populate("phongban").sort("tuoi")
        return res.render("list", {employs: employ})
    }

    static async getAdd(req, res) {
        res.render("create")
    }

    static async postAdd(req, res) {
        const branch = new Branch({
                ten: req.body.phongban
            }
        )
        await branch.save()
        const employs = new employModel({
            ma: req.body.code,
            ten: req.body.name,
            tuoi: req.body.age,
            luong: req.body.price,
            phongban: branch
        })
        await employs.save()
        res.redirect('/')
    }

    static async delete(req, res) {
        let id = req.params.id
        const idEmploy = await employModel.findOne({_id: id}).populate('phongban')
        const branch = await Branch.findOne({_id: idEmploy.phongban})
        await branch.remove()
        await idEmploy.remove()
        res.redirect('/')
    }

    static async getUpdate(req, res) {
        let id = req.params.id
        const Employ = await employ.findOne({id: id}).populate('phongban')
        return res.render('update', {employ: Employ})
    }

    static async postUpdate(req, res) {
        let id = req.params.id
        const employUpdate = await employModel.findOne({_id: id}).populate('phongban')
        employUpdate.ma = req.body.code
        employUpdate.ten = req.body.name
        employUpdate.tuoi = req.body.age
        employUpdate.luong = req.body.price
        const branch = await Branch.findOne({_id: employUpdate.phongban._id})
        branch.ten = req.body.name
        await employUpdate.save()
        return res.redirect('/')
    }

    static async Detail(req, res) {
        let id = req.params.id
        const employs = await employ.findOne({_id: id}).populate('phongban')
        res.render('detail', {employs: employs})
    }

}

export default employController