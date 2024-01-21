const express = require('express');
const router = express.Router();
const Wishlist = require('../Models/Wishlist.mode');
router.route('/').post(async (req, res) => {
    try {
        if (!req.body.hotelId) { 
            return res.status(400).json({ error: "The 'hotelId' field is required." });
        }
        const newWishlist = new Wishlist(req.body); 
        const savedWishlist = await newWishlist.save();
        if (!savedWishlist) {
            return res.status(500).json({ message: "Couldn't add to wishlist" });
        }
        res.status(201).json(savedWishlist);
    } catch (error) {      
        console.error("Error in Wishlist mode:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.route("/:id").delete(async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id)
        res.status(201).json({message:"Hotel Id deleted "})
    }catch(error){
        console.log("couldnt delete the hotel")
    }
})
router.route("/").get(async(req,res)=>{
   try {
     const wishlist=await Wishlist.find({});
     wishlist? res.status(201).json({message:"Wishlist Found"}) : res.status(500).json({message:"Wishlist not Found"})
   } catch (error) {
    console.log(error)
   }
   
})
module.exports = router;
