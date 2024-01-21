
const express = require('express');
const dotenv = require('dotenv');
const signUp=require('../Controllers/Signup_Handler.js')
const LoginUser=require('../Controllers/Login_Handler.js')
const router = express.Router();
dotenv.config();

router.post('/register',signUp);

router.post('/login', LoginUser);

module.exports = router;
