var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/fnq', function(req, res, next) {
  res.render('fnq', { title: 'fnq' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'event' });
});

module.exports = router;
