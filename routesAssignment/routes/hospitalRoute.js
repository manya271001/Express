const express=require('express')
const route=express.Router();


route.get('/home',(req,res)=>{
    res.send("hospitals home page")
})
route.get('/patient',(req,res)=>{
    res.send("hospitals patient page")
})
route.get('/admit',(req,res)=>{
    res.send("hospitals admit page")
})
route.get('/save',(req,res)=>{
    res.send("hospitals save page")
})

module.exports=route