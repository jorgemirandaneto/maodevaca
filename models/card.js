'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {    
    Name: DataTypes.STRING
  }, { sequelize, modelName: 'card', tableName: 'Card', schema: 'maodevaca' });
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};