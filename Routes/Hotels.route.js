const express= require('express');
const router=express.Router();
const hotels=require('../Data/Hotels');
router.route('/').get((req,res)=>{
    res.json(hotels.data)
})

module.exports=router;