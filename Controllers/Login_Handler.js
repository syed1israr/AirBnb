
const jwt=require('jsonwebtoken')
const Crypto = require('crypto-js');
const User = require('../Models/User.model');


const LoginUser=async (req, res) => {
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
}
module.exports=LoginUser;