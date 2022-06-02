// Object.prototype
// Person.prototype

// Person constructor
function Person(fName, lName, dob) {
  this.fName = fName;
  this.lName = lName;
  this.birthday = new Date(dob); 
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();    
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();    
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get full name
Person.prototype.getFullName = function(){
  return `${this.fName} ${this.lName}`;
}

// get Married
Person.prototype.getsMarried = function(newLastName){
  this.lName = newLastName;
}

const john = new Person('John', 'Doe', '8-30-1978');
const mary = new Person('Mary', 'Lane', '3-31-2001');

console.log(mary);
console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('fName'));
console.log(mary.hasOwnProperty('getFullName'));