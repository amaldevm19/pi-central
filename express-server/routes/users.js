var express = require('express');
var router = express.Router();

/* GET user login */
router.get('/login', function(req, res, next) {
  const data ={
    pageTitle:'Login',
    title: 'User Login',
    piName:"PI-Logger @Fujeirah",
    user:{
      loggedIn:false
    }
  }
  res.render('user/login',{layout:"login", data});
});
router.get('/register', function(req, res, next) {
  const data ={
    pageTitle:'Register',
    title: 'User Register',
    piName:"PI-Logger @Fujeirah",
    user:{
      loggedIn:false
    }
  }
  res.render('user/register',{layout:"login", data});
});

module.exports = router;
