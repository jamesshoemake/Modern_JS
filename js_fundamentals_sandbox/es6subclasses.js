// subclasses

class Person {
  constructor(fName, lName){
    this.fName = fName;
    this.lName = lName;
  }

  greeting(){
    return `Hello ${this.fName} ${this.lName}`;
  }
}

// can use Person methods, but Person cannot use Customer Methods
class Customer extends Person {
  constructor(fName, lName, phone, membership){
    super(fName, lName);

    this.phone = phone;
    this.membership = membership;
  }

  // override
  // greeting(){
  //   return `Hello ${this.fName} ${this.lName}, Welcome`;
  // }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('Jon', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());