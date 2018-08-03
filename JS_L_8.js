let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log('I want to eat a '+fruit));

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

let secretMessage = animals.map(animals => animals[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

let smallNumbers = bigNumbers.map(function(number){
  return bigNumbers[number]/100;
});

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

let smallNumbers = randomNumbers.filter(number => number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some(function(word) {
  return word.length < 6;
}));

let interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords.every(word =>  word.length > 5));

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
