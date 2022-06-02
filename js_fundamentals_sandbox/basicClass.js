// constructor
// constructors should start with uppercase
function Person(name, dob) {
  // use this to refer to current object
  this.name = name;
  //this.age = age;
  //console.log(this);
  this.birthday = new Date(dob); 
  // method
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();    
    const ageDate = new Date(diff);
    // Math does not require new keyword
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const guy = new Person('Guy', 36);
// const john = new Person('John', 40);

//console.log('guy', guy);
//console.log('john', john);

// global this refers to window object 
//console.log(this);

const James = new Person('James', '11-05-1979')

console.log(James);
console.log(James.calculateAge());