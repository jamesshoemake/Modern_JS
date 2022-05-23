const user = {email: 'jdoe@gmail.com'};
try {
  // ReferenceError
  //myFunction();

  // type error
  //null.myFunction();

  // syntax error
  //eval('Hello');

  // URIError
  //decodeURIComponent('%');

  // user defined error
  if(!user.name){
    throw 'User has no name';
    //throw new SyntaxError('User has no name');
  }
  
} catch(e) {
  console.log(`User Error: ${user.name}`)
  //console.log('error', e);
  //console.log('something error');
  //console.log(e.name);
  //console.log(e instanceof ReferenceError);
} finally {
  // runs always
  console.log('Finally runs not matter the results');
}

console.log('Program continues...');