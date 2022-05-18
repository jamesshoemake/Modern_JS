// Datatypes
// Primitive Data types
// string, number, boolean, null, undefined, Symbols (ES6)

// Reference Data types / objects
// arrays, object literals, functions, dates, storables

// Primitive types

// string
const name = 'John Doe';
console.log(typeof name);

// number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
// returns object - error in JS
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Reference types - Objects
// array
const hobbies = ['movies', 'music']
console.log(typeof hobbies);

// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);