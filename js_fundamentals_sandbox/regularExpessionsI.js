let re;

//re = /hello/; // define a pattern
re = /hello/i; // i for case insensitive
//re = /hello/g; // g for global search..finds all instances

//console.log(re);
//console.log(re.source);

// exec() - return results in an array (match) or null

// const result = re.exec('hello world');
// const result2 = re.exec('hi world');

// console.log(result);
// console.log(result2);
// console.log(result[0]);
// console.log(result.index);

// test() - return true or false if matched
// const result = re.test('hello'); // case senstive

// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

// search() - return index of first match if not found returns -1
// const str = 'Hello There'
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);