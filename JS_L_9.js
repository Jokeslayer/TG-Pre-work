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
  },
};

let friend = {
  name: 'Ryan',
}
friend.sayHello = person.sayHello;

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
console.log(friend.sayHello());
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },

  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};


person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);
