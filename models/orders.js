const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customerid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ship_name: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    ship_address: {
      type: DataTypes.CHAR(80),
      allowNull: false
    },
    ship_city: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    ship_zip_code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    ship_country: {
      type: DataTypes.CHAR(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderid" },
        ]
      },
    ]
  });
};
