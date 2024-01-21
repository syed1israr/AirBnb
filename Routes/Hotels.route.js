const express= require('express');
const router=express.Router();
const Hotel_Handler=require('../Controllers/Hotel.contoller.js')

router.route('/').get( Hotel_Handler)

module.exports=router;