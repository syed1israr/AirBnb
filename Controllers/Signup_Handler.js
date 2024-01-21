// Copyright 2024 Asus
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const Crypto = require('crypto-js');
const User=require('../Models/User.model')
const signUp=async (req, res) => {
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
}
module.exports=signUp