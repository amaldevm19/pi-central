var express = require('express');
var router = express.Router();

/* GET user login */
router.get('/login', function(req, res, next) {
  const userInfo ={
    isLoggedIn:false
  }
  const pageInfo = {
    appTitle:"My-PI",
    pageTitle:"Login",
  }
  res.render('user/login',{layout:"login", userInfo, pageInfo});
});

/* GET user register */
router.get('/register', function(req, res, next) {
  const userInfo ={
    isLoggedIn:false
  }
  const pageInfo = {
    appTitle:"My-PI",
    pageTitle:"Register",
  }
  res.render('user/register',{layout:"login",userInfo, pageInfo});
});

module.exports = router;
