import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './JS_L_12_airplane.js';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + 		meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();
