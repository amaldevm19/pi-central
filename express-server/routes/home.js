var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data ={
    pageTitle:'Home',
    title: 'Overview',
    piName:"PI-Logger @Fujeirah",
    user:{
      loggedIn:false
    }
  }
  res.render('home', { data });
});


module.exports = router;
