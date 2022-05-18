// if statements and comparisons

/* if(something){
  do something
} else {
  dom something else
} 
*/

const id = 100;

// equal to
// if(id == 101){
//   console.log('value:TRUE');
// } else {
//   console.log('value:FALSE');
// }

// not equal
// if(id != 101){
//   console.log('value:TRUE');
// } else {
//   console.log('value:FALSE');
// }

// equal to value and type
// if(id === '100'){
//   console.log('value&type:TRUE');
// } else {
//   console.log('value&type:FALSE');
// }

// if(id === 100){
//   console.log('value&type:TRUE');
// } else {
//   console.log('value&type:FALSE');
// }

// if(id !== '100'){
//   console.log('value&type:TRUE');
// } else {
//   console.log('value&type:FALSE');
// }

// if(id !== 100){
//   console.log('value&type:TRUE');
// } else {
//   console.log('value&type:FALSE');
// }

// test if variable exists 
// if(typeof id !== 'undefined'){
//   console.log(`This ID is ${id}`);
// } else {
//   console.log(`NO ID`);
// }

// greater or less than
// if(id >= 200){
//   console.log('greater than');
// } else {
//   console.log('not greater than');
// }

// if else
let color = 'red';
color = 'blue';
color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is Not red or blue');
// }

// logical operators
const name = 'Steve';
const age = 25;

// and &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 110 ? 'correct' : 'incorrect');
console.log(id === 100 ? 'correct' : 'incorrect');

// without {}
if(id === 100)
  console.log('correct');
else
  console.log('incorrect');