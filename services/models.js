const { DataTypes, Model } = require('sequelize');
const sequelize = require('./db');

class Book extends Model {}

Book.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
});

module.exports = Book;