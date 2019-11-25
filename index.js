const express= require("express", "4.17.1")
const app=express()
app.get("/",function(req,res){
res.send("HELLO world")
})
app.listen("3000","0.0.0.0")
