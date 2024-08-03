import express from 'express'
import cors from 'cors'
import newsModel from './model/NewsModel.js'
import { connectDB } from './config/db.js'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

connectDB()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.post('/fetch',async (req,res)=>{
    const newsid = req.body.value
    console.log(`value ${newsid}`)
    const response  = await newsModel.find({id:newsid})
    if(response){
        return res.json({success:true,data:response})
    }
    else{
        return res.json({success:false,message:"Record not found"})
    }
})

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}/`)
})