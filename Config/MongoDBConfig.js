// MongoDBConfig.js

const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const ConnectDB = async () => {
  try {
     await mongoose.connect(process.env.DATABASE_URl);
  } catch (error) {
        console.log(error)
  }
};

module.exports = ConnectDB;
