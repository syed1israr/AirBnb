const mongoose = require('mongoose');

const categorySchemaa = new mongoose.Schema({
  category: { type: String }
}, { timestamps: true });

const categoryData = mongoose.model("categoryData", categorySchemaa);

module.exports = categoryData;
