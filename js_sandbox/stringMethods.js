// String Methods
const firstName = 'John';
const lastName = 'Doe';
const age = 36;
const str = 'Hello there my name is John';
const tags = 'web design, web development, sql server';
let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;
val = 'John ';
val += 'Doee';


val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change  case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// strings are like arrays
val = firstName[0];

// indexOf()
val = firstName.indexOf('n');
val = lastName.lastIndexOf('n');

// charAt()
val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length -1);

// get substring()
val = firstName.substring(0,2);

// slice()
val = firstName.slice(0,2);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('John', "Joe");

// includes()
val = str.includes('Hello');

console.log(val);