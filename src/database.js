const Sequelize = require('sequelize');
require('dotenv').config();

class Database {
    constructor(config) {
        this.init();
    }

    init() {
        this.db = new Sequelize({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            dialect: 'mysql'
        });
    }
}

module.exports = new Database();