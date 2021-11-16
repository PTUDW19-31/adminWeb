var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Asbab' });
});

router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Asbab - Login' });
});

router.get('/itemList', function(req, res, next) {
  res.render('itemList', { title: 'Asbab - Item' });
});

router.get('/itemEditor', function(req, res, next) {
  res.render('itemEditor', { title: 'Asbab - Item' });
});

router.get('/charts.html', function(req, res, next) {
  res.render('charts', { title: 'Asbab - Item' });
});


module.exports = router;
