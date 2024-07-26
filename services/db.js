const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        logging: false
    }
});

// Sync all models
(async function syncModels() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync({ force: false }); 
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or sync models:', error);
    }
})();

module.exports = sequelize;