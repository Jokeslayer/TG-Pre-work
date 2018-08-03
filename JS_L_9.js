let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function(){
  	return 'Hello, my name is '+ this.name
	},
	sayGoodbye(){
    return 'Goodbye!'
  }
};

person.hobbies = ['reading', 'videogames'];

person.hobbies = ['listening to audiobooks'];

console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(person['hobbies']);
console.log(person.sayHello());
