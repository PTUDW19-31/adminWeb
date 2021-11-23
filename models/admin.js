const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    pass: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "pass" },
        ]
      },
    ]
  });
};
