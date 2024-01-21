const express=require('express');
const Router=express.Router();
const Hotel=require('../Models/Hotels.model');

Router.route('/:id').get(async(req,res)=>{
try {
        const {id}=req.params;
        const hotel=await Hotel.findById(id);
        res.json(hotel)
} catch (error) {
        console.log("No such Hotel is Found -Single Hotel Route ",error)
}
})
module.exports=Router;