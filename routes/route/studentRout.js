const express=require('express')
const route=express.Router();
route.get("/home",(req,res)=>{
    res.send("student home pageeee")
})
route.get("/about",(req,res)=>{
    res.send("student about pageeee")
})
route.get("/course",(req,res)=>{
    res.send("student course pageeee")
})
route.get("/fees",(req,res)=>{
    res.send("student fees pageeee")
})




module.exports=route;