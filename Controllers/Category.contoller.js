
const category = require('../Models/Category.model.js');
const Category_handler=async (req, res) => {
    try {
        const categories = await category.find({});
        res.json(categories);
    } catch (error) {
        res.status(404).json({ message: "Couldn't get the category from DataBase" });
    }
};
module.exports=Category_handler;