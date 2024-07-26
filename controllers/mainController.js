const Book = require("../services/models");
const sequelize = require('../services/db');


const controller = {

    createBook: async (req, res) => {
        try {
          

            const newBook = await Book.create({
                ...req.body
            });

            res.json(newBook);
        } catch (error) {
            res.status(500).json(error.toString());
        }
    },
    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;

            await Book.destroy({
                where: {
                    
                    id
                }
            })

            res.json("Book deleted");
        } catch (error) {
            res.status(500).json(error.toString());
        }
    },
    getBook: async (req, res) => {
        try {
            const { id } = req.params;

            const book = await Book.findByPk(id);

            res.json(book);
        } catch (error) {
            res.status(500).json(error.toString());
        }
    },
    getBooks: async (req, res) => {
        try {
            const books = await Book.findAll();

            res.json(books);
        } catch (error) {
            res.status(500).json(error.toString());
        }
    },
   
}

module.exports = controller;