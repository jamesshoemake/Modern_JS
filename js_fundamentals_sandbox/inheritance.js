/* 
  Similar to C++ and other oop languages
  Some limitations
*/

// Person constructor
function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

// greeting
Person.prototype.greeting = function(){
  return `Hello ${this.fName} ${this.lName}`
}

//const person1 = new Person('John', 'Doe');

// see the func definition
//console.log(person1.greeting);
// execute the function
//console.log(person1.greeting());

// customer constructor

function Customer(fName, lName, phone, membership){
  Person.call(this, fName,lName);
  this.phone = phone;
  this.membership = membership;
}

// inherti the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return a customer
Customer.prototype.constructor = Customer;

// override greeting
Customer.prototype.greeting = function(){
  return `Hello ${this.fName} ${this.lName} Welcome.`;
}
// create new customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
console.log(customer1.greeting());