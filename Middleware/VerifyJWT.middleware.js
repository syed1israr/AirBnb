const jwt = require('jsonwebtoken');
 const dotenv=require('dotenv');
dotenv.config();
const VerifyJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: "Token not provided" });
    }
};

module.exports = VerifyJWT;
