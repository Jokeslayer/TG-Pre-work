let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

let vacationSpots = ['Venice', 'Athens', 'Florence']

for(let vacationSpotIndex = 0;vacationSpotIndex < vacationSpots.length;vacationSpotIndex++){
  console.log('I would love to visit '+vacationSpots[vacationSpotIndex]);
}

let vacationSpots = ['Venice', 'Athens', 'Florence']

for(let vacationSpotIndex = vacationSpots.length-1;vacationSpotIndex >= 0 ;vacationSpotIndex--){
  console.log('I would love to visit '+vacationSpots[vacationSpotIndex]);
}
