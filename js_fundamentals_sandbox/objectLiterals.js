// Object Literals
const person = {
  firstName: 'Joe',
  lastName: 'Bob',
  age: 35,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2022 - this.age;
  }
}

let val;
val = person;

// get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log('val ', val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age:23}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
