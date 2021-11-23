const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    book_isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    book_title: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    book_author: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    book_image: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    book_descr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    book_price: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    publisherid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_isbn" },
        ]
      },
    ]
  });
};
