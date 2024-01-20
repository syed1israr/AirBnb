const express = require('express');
const Router = express.Router();
const category = require('../Models/Category.model.js');

Router.route('/api/category').get(async (req, res) => {
    try {
        const categories = await category.find({});
        res.json(categories);
    } catch (error) {
        res.status(404).json({ message: "Couldn't get the category from DataBase" });
    }
});

module.exports = Router;
