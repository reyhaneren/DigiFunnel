var express = require('express');
var router = express.Router();
var Funnel = require('../models/funnel');
var User = require('../models/user');

router.get('/', ensureAuthenticated, function (req, res, next) {
  Funnel.find({user:req.user}, function (err, funnels){
    res.render('funnel.ejs',{ funnels : funnels, isAuthenticated : req.isAuthenticated() });
  });
});
router.get('/detail/:id', ensureAuthenticated, function (req, res, next) {
    Funnel.findById(req.params.id, function (err, record){
      res.render('detail.ejs',{ funnel : record , isAuthenticated : req.isAuthenticated() });
    });
});
router.get('/create', ensureAuthenticated, function (req, res, next) {
  res.json(new Funnel());
});
router.get('/new', ensureAuthenticated, function (req, res, next){
  res.render('new.ejs', { isAuthenticated : req.isAuthenticated() });
});
router.post('/', ensureAuthenticated, function (req, res, next){
  var newFunnel = new Funnel(req.body);
  User.findById(req.user._id, function (err, user){
    newFunnel.user = user
    newFunnel.save();
    res.json(newFunnel._id);
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
