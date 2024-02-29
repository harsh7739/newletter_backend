const mongoose = require("mongoose")

const NewsSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    timeStamp:{
        type:Date
    }
},
{
    versionKey:false
})

const NewsModel = mongoose.model("newsletter",NewsSchema)

module.exports = {NewsModel}