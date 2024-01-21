const express = require('express');
const router = express.Router();

const VerifyJWT=require("../Middleware/VerifyJWT.middleware.js")
const wishlistContoller=require('../Controllers/WishList_Handler.js');
const {getWishList,postWishlist,deleteWishList}=wishlistContoller

router.route('/').post(postWishlist);
router.route("/:id").delete(deleteWishList)
router.route("/").get(getWishList)
module.exports = router;
