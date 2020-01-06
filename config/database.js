const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
        underscored: true
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com postgres Ok!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao postgres:', err);
    });


const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.card = require('../models/card')(sequelize, Sequelize);

module.exports = db;