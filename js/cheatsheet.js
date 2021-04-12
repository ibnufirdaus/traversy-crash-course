//- let, const

// let maxAge = 30;
// const minAge = 18;

// console.log(maxAge, minAge)

//- String, Numbers, Boolean, null

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined too
console.log(typeof rating)

//- Concatenation
console.log('My name is ' + name + ' and I am ' + age)
//- Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

const s = 'Hello World!';
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.substring(0,5))
console.log(s.split(' '))

//- Arrays
const numbers = new Array(1,2,4,8);
const fruits = ['apples', 'oranges', 'pears', 10, true]
fruits[1] = 'grapes';
fruits.push('mangos');
fruits.unshift('berries')

console.log(numbers)
console.log(fruits)
console.log(fruits[1])
console.log(fruits.indexOf('pears'))

// Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'games', 'sports'],
    address: {
        street: 'Road 1st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'johndoe@email.com'

console.log(person)

const {firstName, lastName, address: {city}} = person;
console.log(firstName, lastName, city)

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    },
]

console.log(todos[1].text)

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//- For

for(let i = 0; i<10; i++) {
    console.log(`Number ${i}`);
}

for(let i = 0; i<todos.length; i++) {
    console.log(todos[i]);
}

for (let todo of todos){
    console.log(todo.text);
}

//- While

let i = 0
while(i < 10) {
    console.log(`Number ${i}`);
    i++;
}

//- forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText)

const todoDone = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoDone)

//- Conditionals
// == value match
// == value and type match

const num1 = 10;

if (num1 === 10) {
    console.log('x is 10');
} else if (num1 > 15) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const num2 = 5;

if (num1 > 10 || num2 < 5) {
    console.log('one number is valid')
}

const numColor = 12;
const color = numColor > 10 ? 'black' : 'white';
console.log(color)

switch(color) {
    case 'black':
        console.log('color is black');
        break;
    case 'white':
        console.log('color is white');
        break;
    default:
        console.log('color is unknown');
}

//- functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

const adNums2 = (num1 = 1, num2 = 1) => num1 + num2; // same but cooler

console.log(addNums(4,5));
console.log(addNums());


//- OOP

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '1995-12-17T03:24:00');
const person2 = new Person('Mary', 'Smith', '1990-3-15T03:24:00');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

//- Class
class Human {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const human1 = new Human('John', 'Doe', '1995-12-17T03:24:00');
const human2 = new Human('Mary', 'Smith', '1990-3-15T03:24:00');
console.log(human1);
console.log(human1.getBirthYear());
console.log(human2.getFullName());