const express = require('express');
const app = express();
const hotelRouter = require('../Airbnd/Routes/Hotels.route.js');
const ConnectDB = require("../Airbnd/Config/MongoDBConfig.js");
const { default: mongoose } = require('mongoose');
const HotelDataRouter= require('./Routes/hotelData.route.js')
const CategoryDataRouter=require('./Routes/CategoryData.route.js')
const CategoryRouter=require('../Airbnd/Routes/Categories.route.js')
const  SinglehotelRouter=require('./Routes/SingleHotel.route.js')
const registerUserRouter=require('./Routes/Auth.route.js')
const WishlistRouter=require("../Airbnd/Routes/Wishlist.route.js")

const dotenv=require('dotenv');



const PORT = process.env.PORT || 3900; 

ConnectDB();
dotenv.config();

mongoose.connection.once("open", () => {
  console.log("connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

app.use(express.json());
app.use('/api/hotelsData',HotelDataRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/categoryData', CategoryDataRouter);
app.use('/api/category',CategoryRouter);
app.use('/api/hotel',SinglehotelRouter);
app.use('/api/auth',registerUserRouter);
app.use('/api/wishlist',WishlistRouter);

app.get('/', (req, res) => {
  res.send('hello israr');
});
