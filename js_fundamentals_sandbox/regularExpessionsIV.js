// shorthand character classes

let re;

// shorthand character classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // one or more word characters
re = /\W/; // non word characters
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more
re = /\D/; // match any non digit
re = /\s/; // match white space characters
re = /\S/; // match non white space characters
re = /Hell/i; // word boundary
re = /Hell\b/i; // word boundary

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y

//const str = 'Hello, welcome to hell';
//const str = 'xy';
const str = 'x';

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