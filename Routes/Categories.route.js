const express = require('express');
const Router = express.Router();
const Category_handler=require('../Controllers/Category.contoller.js')

Router.route('/').get(Category_handler);

module.exports = Router;
