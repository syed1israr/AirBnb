
const express = require('express');
const User = require('../Models/User.model');
const dotenv = require('dotenv');
const Crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: Crypto.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
            email: req.body.email,
            number: req.body.number,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Couldn't register the user inside auth Router File", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ number: req.body.number });

        if (!user) {
            return res.json({ message: "Number Not Found" });
        }

        const decodedPassword = Crypto.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(Crypto.enc.Utf8);
       

        if (decodedPassword !== req.body.password) {
            return res.json({ message: "Invalid password, Doesn't match the Number" });
        }

        const { password, ...userWithoutPassword } = user._doc;
        const accessToken = jwt.sign({ number: user.number }, process.env.ACESS_TOEKN_SECRET);

        res.json({ ...userWithoutPassword, accessToken });
    } catch (error) {
        console.error("Cannot get user logged in", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
