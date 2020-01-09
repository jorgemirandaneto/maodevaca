'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {    
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    key_user : {
      type : DataTypes.INTEGER
    },
    Limit : {
      type: DataTypes.DOUBLE,
      allowNull : true
    }
  }, { sequelize, modelName: 'card', tableName: 'Card', schema: 'maodevaca' });
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};