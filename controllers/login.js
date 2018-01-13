var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

router.get('/', function (req, res, next) {
	res.render('login.ejs', {
		message: req.flash('loginMessage'),
		isAuthenticated : req.isAuthenticated()
	});
});

router.post('/', passport.authenticate('local'), function (req, res, next) {
  return res.redirect('/funnel');
})
module.exports = router;
