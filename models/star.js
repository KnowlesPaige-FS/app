'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Star.belongsTo(models.Galaxy);
      Star.belongsToMany(models.Planet, {through: 'StarsPlanets'});
    }
  }
  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    galaxyId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Galaxy", 
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Star',
  });
  return Star;
};