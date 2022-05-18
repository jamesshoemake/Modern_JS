// Functions Declaration
function greet(firstName='John', lastName='Doe'){
  // if(typeof firstName === 'undefined'){firstname = 'John'}
  //console.log('hello');
  return 'Hello '+ firstName + ' ' + lastName;
}

console.log(greet('Dude', 'Love'));

// Function expressions
// anon function, but can be named
const square = function(x=3){
  return x*x;
}

//console.log(square());
//console.log(square(8));

// immidiately invokable function expressions - IIFEs
// (function(){
//   console.log('IIFE ran...');
// }());

// (function(name){
//   console.log('Hello ' + name);
// }('Guy'));

// Property methods
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();



