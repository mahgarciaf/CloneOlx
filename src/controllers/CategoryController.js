// importando o modelo do category
const Category = require('../models/Category');

// inclusão de uma nova categoria:
exports.createCategory = async (req, res) => {
    try {
      const { name, slug } = req.body;
      const category = new Category({ name, slug });
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// leitura de todas as categorias
exports.getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// exportando as funções do controller
module.exports = {
    createCategory,
    getAllCategories,
  };
  
  