var express = require('express');
var router = express.Router();

/* GET check out page. */
router.get('/', function(req, res, next) {
  res.render('checkout', { title: 'Check out' });
});

module.exports = router;
