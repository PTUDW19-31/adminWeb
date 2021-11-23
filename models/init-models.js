var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _books = require("./books");
var _customers = require("./customers");
var _order_items = require("./order_items");
var _orders = require("./orders");
var _publisher = require("./publisher");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var books = _books(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var order_items = _order_items(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var publisher = _publisher(sequelize, DataTypes);


  return {
    admin,
    books,
    customers,
    order_items,
    orders,
    publisher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
