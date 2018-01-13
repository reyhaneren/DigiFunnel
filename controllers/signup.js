var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	res.render('signup.ejs', {
		message: req.flash('signupMessage'),
		isAuthenticated : req.isAuthenticated()
	});
});

router.post('/', function (req, res, next) {
	  console.log('registering user');
	  User.register(new User({username: req.body.username}), req.body.password, function(err) {
	    if (err) {
	      console.log('error while user register!', err);
	      return next(err);
	    }
	    console.log('user registered!');
	    res.redirect('/funnel');
	  });
});

module.exports = router;
