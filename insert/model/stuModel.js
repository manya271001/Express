const mongoose = require('mongoose')
const stuSchema= new mongoose.Schema({
    rollNo:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports=mongoose.model('student',stuSchema)