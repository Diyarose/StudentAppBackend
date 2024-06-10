const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "admNo":String,
        "college":String,
        "dob":String,
        "email":String,
    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}