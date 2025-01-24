const express = require('express')
const route = express.Router();
const stuController = require("../controller/stuController")
route.get('/home',stuController.homePage );
route.get('/insert',stuController.InserPage );
route.get('/display',stuController.displayPage );
route.post('/save',stuController.savePage );

module.exports=route