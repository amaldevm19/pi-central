module.exports = {
    piStations : new Promise((resolve, reject)=>{
        let piStations = require('../data/pi.details.json');
        resolve(piStations)
    }),

}