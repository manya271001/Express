const express=require('express')
const route=express.Router();
route.get("/home",(req,res)=>{
    res.send("emplloyee home pageeee")
})
route.get("/about",(req,res)=>{
    res.send("emplloyee about pageeee")
})
route.get("/dept",(req,res)=>{
    res.send("employee dept pageeee")
})
route.get("/salary",(req,res)=>{
    res.send("employee salary pageeee")
})




module.exports=route;