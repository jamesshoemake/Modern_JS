// Loops

// FOR loop
// fussy logic: know how many times loop will run
// for(let i = 0; i <= 10; i++){
//   //console.log('Number '+ i);
//   if(i === 2){
//     console.log('2 is the number');
//     continue;
//   }
  
//   if(i === 5){
//     console.log('stop loop at 5');
//     break;
//   }

//   console.log('Number '+ i);
  
  
// }

// While Loop
// fussy logic: used when don't know how long loop runs
// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO while
// runs at least one time.
// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }
// while(i<10);


// Looping arrays : recommended to use Array functions
//const cars=['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i =0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// Array forEach
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// // MAP
// // returns an array
// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sara'},
//   {id:3, name:'Karen'},
//   {id:4, name:'Steve'},
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// Object functions
// For in
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }