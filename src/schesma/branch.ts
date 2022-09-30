import mongoose from "mongoose";


const branch =new mongoose.Schema({
    ten:String,
})

const Branch=mongoose.model('Branch',branch)

export default Branch