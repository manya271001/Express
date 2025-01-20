const express=require('express')
const route=express.Router();
route.get("/location",(req,res)=>{
    res.send("product location page")
})
route.get("/sales",(req,res)=>{
    res.send("product sales pageeee")
})
route.get("/stock",(req,res)=>{
    res.send("product stock pageeee")
})
route.get("/price",(req,res)=>{
    res.send("product price pageeee")
})




module.exports=route;