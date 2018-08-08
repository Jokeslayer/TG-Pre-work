import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './JS_L_12_airplane.js';


function displayFuelCapacity() {
  aircrafts.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + 		meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
};

function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + 		meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
		});
};

displaySpeedRangeStatus();
displayStaffStatus();
