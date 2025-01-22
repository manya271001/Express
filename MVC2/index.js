const express = require('express')
const app = express();
const college=require('./routes/collegeRoutes')
app.use('/college',college)
app.set("view engine", "ejs");
app.listen(8000,()=>{
    console.log("server running on 8000")
})