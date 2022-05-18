// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope:', a, b, c);
// }

// test();

// if(true){
//   // Block Scope
//   // let and const work as expected
//   // var causes problems
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('block scope', a, b, c);
// }

for(let a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}

// var sets global a 
for(var a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

