let userName = 'Aaron';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

let isSoccerFan = false;

if(isSoccerFan == false){
  console.log('No Goal!');
}
else{
  console.log('Goal!');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Fantastic';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let hungerLevel = 10;

if(hungerLevel>7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!');
}

let moonPhase = 'full';

let isFoggyNight = false;

if(moonPhase=== 'full' || isFoggyNight){
  console.log('Howl!');
}
else if(moonPhase === 'mostly full'){
  console.log('Arms and legs are getting ');
}
else if(moonPhase === 'mostly new'){
  console.log('Back on two feet');
}
else{
  console.log('Invalid moon phase')
}
