const Sequelize = require('sequelize')
const db = require('../index');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus;