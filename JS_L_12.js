let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

console.log(displayAirplane());
