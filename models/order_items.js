const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_items', {
    orderid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    book_isbn: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    item_price: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    quantity: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_items',
    timestamps: false
  });
};
