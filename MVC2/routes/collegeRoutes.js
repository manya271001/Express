const express = require('express')
const route = express.Router();
const collegeController=require('../controller/collegeController')
route.get('/home',collegeController.homePage )
route.get('/about',collegeController.AboutPage )
route.get('/course',collegeController.CoursePage )
route.get('/faculty',collegeController.faultyPage )
route.get('/contact',collegeController.contactPage)

module.exports=route