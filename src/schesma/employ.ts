import mongoose from 'mongoose';

const EmploySchema = new mongoose.Schema({
    ma: Number,
    ten: String,
    tuoi: Number,
    luong: Number,
    phongban: {type: mongoose.Schema.Types.ObjectId, ref: "Branch"}
})

const employModel = mongoose.model('employs', EmploySchema);
export default employModel