// Arrays & Array methods
// Create some arrays
const numbers = [43, 454, 64, 435, 5];
const numbers2 = new Array(22, 34, 45, 234, 74);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = ['22', 'String', true, undefined, null, {a:1, b:3}, new Date()];

let val;

// get array length
val = numbers.length;
// check if is array
val = Array.isArray(numbers);
// get singe value
val = numbers[0];
val = numbers[6];
// insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(454);
// mutating arrays
// add to end
//numbers.push(250);
// add to front
//numbers.unshift(311);
// take from end
//numbers.pop();
// take from front
//numbers.shift();
// splice values
//numbers.splice(1,1);
//numbers.splice(1,3);
// reverse
numbers.reverse();

// concate array
val = numbers.concat(numbers2);

// sort arrays
val = fruits.sort();
//val = numbers.sort(); // sorts by first number

// use "compare function" to sort numbers
// val = numbers.sort(function(x,y){
//   return x -y;
// });

// // reverse sort
// val = numbers.sort(function(x,y){
//   return y - x;
// });

// find
function under50(num){
  return num < 50;
}
function over50(num){
  return num > 50;
}

val = numbers.find(under50);
val = numbers.find(over50);

console.log(numbers);
console.log('val: ', val);
