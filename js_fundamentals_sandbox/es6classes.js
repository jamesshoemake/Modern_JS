// just syntax, underlying objects are simialr to previous versions
class Person {
  constructor(fName, lName, dob){
    this.fName = fName;
    this.lName = lName;
    this.birthday = new Date(dob);
  }

  // methods get added to prototype
  greeting(){
    return `Hello ${this.fName} ${this.lName}`
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lName = newLastName;
  }

  static addNumbers(x, y){
    return x + y;
  }
}


const mary = new Person('Marry', 'Lane', '11-13-1986');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getsMarried('Doe');
console.log(mary);


// Static methods
// this doesnt work
//console.log(mary.addNumbers(1,2));
console.log(Person.addNumbers(1,2));