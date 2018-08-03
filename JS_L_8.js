let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log('I want to eat a '+fruit));

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animals => animals[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(number){
  return bigNumbers[number]/100;
});

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

let smallNumbers = randomNumbers.filter(number => number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
