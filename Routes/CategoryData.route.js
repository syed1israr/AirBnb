const express=require('express');


const category=require('../Models/Category.model.js');
const categoryData=require('../Data/Category.js')

const RouterCategoryData=express.Router();
RouterCategoryData.route('/').post(async(req,res)=>{
       try {
         const categoryDataInDB=await category.insertMany(categoryData.data);
         res.json(categoryDataInDB)
       } catch (error) {
            console.log("This error is from Data Route js",error)
       }
})

module.exports=RouterCategoryData;