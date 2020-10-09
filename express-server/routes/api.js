var express = require('express');
var router = express.Router();
const {piStations} = require('../helpers/stations-socket')

const analogueSensor = new Promise((resolve, reject)=>{
  let analogueSensors = require('../data/analog.sensor.json');
  resolve(analogueSensors)
})


const digitalSensors = new Promise((resolve, reject)=>{
  let digitalSensors = require('../data/digital.sensor.json');
  resolve(digitalSensors)
})


/* GET home page. */
router.get('/analog', async function(req, res, next) {
  analogueSensor.then((analogueSensors)=>{
    console.log(analogueSensors)
    res.status(200).json(analogueSensors);
  })
});
router.get('/digital', async function(req, res, next) {
  digitalSensors.then((digitalSensors)=>{
    console.log(digitalSensors)
    res.status(200).json(digitalSensors);
  })
});
router.get('/pi-stations', function(req, res, next) {
  piStations.then((data)=>{
    res.status(200).json(data);
  })
});

module.exports = router;