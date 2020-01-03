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


// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.item = require('../models/item')(sequelize, Sequelize);
// db.mesuare = require('../models/mesuare')(sequelize, Sequelize);
// db.user = require('../models/user')(sequelize, Sequelize);

// db.item.belongsTo(db.mesuare);
// db.mesuare.hasMany(db.item);


module.exports = db;