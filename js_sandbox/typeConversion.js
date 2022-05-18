// Type conversions
let val;

// Number to string
val = 5;

val = String(val);
val = String(4+4);
// bool to string
val = String(true);
// Date to string
val = String(new Date());
// array to string
val = String([1,2,3,4]);
// toString()
val = (5).toString();
val = (true).toString();

// string to number
val = '5';
val = Number(val);
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number ([1,2,3]);

// convert to int or float
val = parseInt('100');
val = parseInt('100.00');
val = parseFloat('100.03');

// output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());
console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);