const express=require('express')
const route=express.Router();


route.get('/stugallery',(req,res)=>{
    res.send("student gallary page")
})
route.get('/companyimages',(req,res)=>{
    res.send("company image  page")
})
route.get('/managerprotfolio',(req,res)=>{
    res.send("manager portfolio page")
})
route.get('/productimages',(req,res)=>{
    res.send("product image page")
})

module.exports=route