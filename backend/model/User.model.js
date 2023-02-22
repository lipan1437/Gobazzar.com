const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    pass:String,
    email:String,
})


const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}