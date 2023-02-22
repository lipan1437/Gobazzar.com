const express = require("express")
const app= express()
const cors = require("cors")
const { postRouter } = require("./routes/Post.route")
const { connection } = require("./config/db")
const { UserModel } = require("./model/User.model")
require("dotenv").config()
app.use(express.json())

app.use(cors())




app.post("/register",async (req,res)=>{
    const userDetail=req.body
    try {
        const user=new UserModel(userDetail)
        await user.save()
        
        res.send({"msg":"User Registered Successfully"})
        
    } catch (error) {
        res.send({"msg":"Something wrong happen","error":error.message})
        
    }
})


app.use("/posts",postRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server has running port ${process.env.port}`)
})

