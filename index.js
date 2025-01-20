const express=require('express')
const app = express();
const port=9000;

app.get("/",(req,res)=>{
    res.send("<h1>HELLO WELCOME ALL WE ARE LEARNING MERN</h1>")
  
})
app.get("/home",(req,res)=>{
    res.send("HELLO WELCOME TO HOME PAGE")
   
})
app.get("/about",(req,res)=>{
    res.send("HELLO WELCOME TO ABOUT PAGE")
   
})
app.get("/contact",(req,res)=>{
    res.send("HELLO WELCOME ALL TO CONTACT PAGE")
   
})
app.post("/data",(req,res)=>{
    res.send("DATA SAVES SUCESSFULLYY!!!!!!")
   
})

// for student

app.get('/student/home',(req,res)=>{
    res.send("student home pagee")
})
app.get('/student/about',(req,res)=>{
    res.send("student about pagee")
})
app.get('/student/fees',(req,res)=>{
    res.send("student fees pagee")
})

// teacher
app.get('/teacher/home',(req,res)=>{
    res.send("teacher home pagee")
})
app.get('/teacher/about',(req,res)=>{
    res.send("teacher about pagee")
})
app.get('/teacher/department',(req,res)=>{
    res.send("teacher department pagee")
})

app.listen(9000)