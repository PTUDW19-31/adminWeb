const {models} = require('../../models')

exports.list = () => {
    // return models.sach.findAll({raw: true});
    return models.books.findAll({ raw: true });
};  