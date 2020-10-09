var express = require('express');
var router = express.Router();
const {piStations} = require('../helpers/piDummyDataRequest')

/* GET home page. */
router.get('/', function(req, res, next) {
  const pageInfo = {
    appTitle:"My-PI",
    pageTitle:"Home",
  }
  piStations.then((piData)=>{
    console.log(piData)
    res.render('home', {piData, pageInfo});
  })
});


module.exports = router;
