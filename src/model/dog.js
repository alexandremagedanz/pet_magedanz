const database = require("../database");

class Dog {
    constructor() {
        this.model = database.db.define('dogs', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }, 
            spitz: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            owner: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            age: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false
            },  
        })
    }
}

module.exports = new Dog().model;