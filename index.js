const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/pop", (req,res)=>{
    console.log("hellow brother")
    res.send({
        'text':"wow"
    })
})

app.post("/geek:lol", (req,res)=>{
    console.log(req.params['lol'])
    res.send("your no is :- ", req.params['lol'])
})
app.listen(8000, ()=>{
    console.log("seerver is started")
})