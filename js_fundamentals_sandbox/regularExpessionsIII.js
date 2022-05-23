// character sets & quantifiers

let re;

//brackets [] - character sets
// re = /gr[ae]y/i; // must be an a or e
// re = /[GF]ray/ // must be G or F
// re = /[GF]ray/i // must be G  F g or f
// re = /[^GF]ray/i // must anything except G g F f
// re = /^[GF]ray/i // must begin with G g F f
// re = /[A-Z]ray/ // match any uppercase leter
// re = /[a-z]ray/ // match any lowercase leter
// re = /[A-Za-z]ray/ // match any case leter
// re = /[0-9]ray/; // match any digit

// braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly {m} times
re = /Hel{2,4}o/i; // must occur between {m, n} times
re = /Hel{2,}o/i; // must occur at least {m} times
// string to match

// parethesis () - grouping
re = /([0-9]x){3}/; // match group 3 times
re = /^([0-9]x){3}$/; // match group 3 times only

//const str ='Gray';
//const str = 'Hello';
const str = '3x3x3x';

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