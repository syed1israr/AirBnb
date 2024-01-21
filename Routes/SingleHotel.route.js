const express=require('express');
const Router=express.Router();

const singlerHotelHandler=require('../Controllers/Single_Hotels_Handler')

Router.route('/:id').get(singlerHotelHandler)
module.exports=Router;