// doesnt use constructors or inheritance
const personPrototypes= {
  greeting: function(){
    return `Hello ${this.fName} ${this.lName}`;
  },
  getsMarried: function(newLastName){
    this.lName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.fName = 'Mary';
mary.lName = "Williams";
mary.age = 30;

console.log(mary);
mary.getsMarried('Doe');
console.log(mary.greeting());


const brad = Object.create(personPrototypes, {
  fName: {value: 'Bard'},
  lName: {value: 'Traversy'},
  age: {value: 36}
});


console.log(brad);
console.log(brad.greeting());

