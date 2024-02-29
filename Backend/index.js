const express = require("express")
const { connection } = require("./db")
const { NewsModel } = require("./Schema/newsSchema")



const app = express()

app.get("/",(req,res)=>{
    console.log(req)
    res.send("Index Page")
})


app.post("/news",async(req,res)=>{
    req.body.timeStamp=new Date.now()
    req.body.newsletter = "This is dummy NewsLetter"
    console.log(req.body)
try {
    const news =new NewsModel(req.body)
await news.save
res.send("accepted")
} catch (error) {
    res.send(error)
}
})



app.listen(8080,async()=>{
    try {
        await connection
    console.log("Connected to DB...")
    console.log("running on port 8080")
    } catch (error) {
        console.log(error)
    }
})



module.exports=app