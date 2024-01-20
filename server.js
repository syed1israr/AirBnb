const express = require('express');
const app = express();
const hotelRouter = require('../Airbnd/Routes/Hotels.route.js');
const ConnectDB = require("../Airbnd/Config/MongoDBConfig.js");
const { default: mongoose } = require('mongoose');
const Router= require('./Routes/Data.route.js')

const PORT = process.env.PORT || 3900; // Define PORT as a constant

ConnectDB();

mongoose.connection.once("open", () => {
  console.log("connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

app.use(express.json());
app.use('/api/hotelsData',Router)
app.use('/api/hotels', hotelRouter);

app.get('/', (req, res) => {
  res.send('hello israr');
});
