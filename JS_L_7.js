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

let myPlaces = ['San Francisco','Silicon Valley','Denver'];

let friendPlaces = ['New York','Denver','Hawaii'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  	for (let friendPlacesIndex=0;friendPlacesIndex < friendPlaces.length;friendPlacesIndex++){
      if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
        console.log('Match: '+ friendPlaces[friendPlacesIndex]);
      }
    }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Spade';

currentCard = 'Heart';

while(currentCard != 'Spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('found a spade')
