// Template Literals
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>' + age + '</li><li>' + job + '</li><li>' + city + '</li></ul>';

html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'<li>City: ' + city + '</li>' + '</ul>';

// with template string | template literal
function hello(){
  return 'hello';
}
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2+2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;