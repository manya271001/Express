const express = require('express')
const app = express();
const StuRout=require("./route/studentRout");
const empRout=require('./route/employeeRoute');
const prodRout=require('./route/productRoute');
app.use("/student",StuRout);
app.use("/emplloyee",empRout);
app.use('/products',prodRout);


app.listen(8000,()=>{
    console.log("server run at 9000")
})