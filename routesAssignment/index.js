const express = require('express')
const app = express()
const hospitalRoute=require('./routes/hospitalRoute')
const galleryRoute=require('./routes/galleryRoute')
app.use('/hospitals',hospitalRoute);
app.use('/gallery',galleryRoute);


app.listen(8080, ()=>{
console.log("server running on 8080")
})