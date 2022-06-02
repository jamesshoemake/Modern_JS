/* 
  I rarely use these 
*/

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name1 === 'Jeff'){
  console.log('True');
} else {
  console.log('False');
}

// checking type is string and value is Jeff
if(name2 === 'Jeff'){
  console.log('True');
} else {
  console.log('False');
}

// only checking value
if(name2 == 'Jeff'){
  console.log('True');
} else {
  console.log('False');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1, num2);
console.log(typeof num1, typeof num2);

// bool
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1, bool2);
console.log(typeof bool1, typeof bool2);

// function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1+ 1');

console.log(getSum1(1,1));
console.log(getSum2(1,1));

// object
const john = {
  name: 'John'
};
const john2 = new Object({name: 'john'})
console.log(john);
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array([1,2,3,4]);
console.log(arr1);
console.log(arr2);

// regualr expressions
const re1 = /\w+/; // any number of word characters
const re2 = new RegExp('\w+')
const re3 = new RegExp('\\w+') // escape

console.log(re1);
console.log(re2);
console.log(re3);