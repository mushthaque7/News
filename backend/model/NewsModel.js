import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    explanation:{
        type:String,
        required:true
    }
})

const newsModel = mongoose.models.news || mongoose.model("news",newsSchema)

export default newsModel
