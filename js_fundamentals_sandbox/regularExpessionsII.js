// metacharacter symbols
let re;

// literal character
re = /hello/;
//re = /hello/i;

// meta character symbols
re = /^h/i; // ^ must start with
re = /d$/i; // $ must end with
re = /^hello$/i; // must start and end with hello
re = /^h.llo$/i; // match any one character
re = /h*llo/i; // match any character 0 or more
re = /gra?e?y/i; // ? optional character
re = /gre?a?y\?/; // escape characters

// string to match
//const str = 'Hello World';
//const str = 'Heello';
//const str ='Gray';
const str ='Gra4';


// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);

  } else {
    console.log(`${str} !matches ${re.source}`);
  }
}

reTest(re, str);