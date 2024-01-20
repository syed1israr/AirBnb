const express=require('express');


const hotelData=require('../Models/Hotels.model.js');
const hotels=require('../Data/Hotels.js')

const Router=express.Router();
Router.route('/').post(async(req,res)=>{
       try {
           
         const HotelDataInDB=await hotelData.insertMany(hotels.data);
         res.json(HotelDataInDB)
       } catch (error) {
            console.log("This error is from Data Route js",error)
       }
})

module.exports=Router;