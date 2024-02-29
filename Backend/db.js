const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Harsh:ranjan@cluster0.kofyl9t.mongodb.net/newsdb?retryWrites=true&w=majority&appName=Cluster0")

module.exports={connection}
