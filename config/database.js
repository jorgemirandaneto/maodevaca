const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
//     host: process.env.HOST,
//     dialect: process.env.DIALECT,
//     define: {
//         underscored: true
//     }
// })

const sequelize = new Sequelize('aziyewem', 'aziyewem', '4P2mTfe11A60R1WGF9smjanZWbiCpb7r', {
    host: 'elmer.db.elephantsql.com',
    dialect: 'postgres',
    define:{
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
// db.mesuare = require('../models/mesuare')(sequelize, Sequelize);
// db.user = require('../models/user')(sequelize, Sequelize);

// db.item.belongsTo(db.mesuare);
// db.mesuare.hasMany(db.item);


module.exports = db;