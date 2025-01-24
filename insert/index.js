const express = require('express')
const app = express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const student=require('./route/stuRoute')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1:27017/student")
app.use('/student',student)
app.set("view engine", "ejs");
app.listen(8000,()=>{
    console.log("server running on 8000")
})