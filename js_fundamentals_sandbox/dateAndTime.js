// Time & Date
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Sept 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); // 0 based 0 = Jan
val = today.getDate();
val = today.getDay(); // 0 base sunday = 0
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of seconds since jan 1 1970;

//console.log('typeof val ',typeof val);
console.log('val ', val);


birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log('birthday', birthday);


