// Exploring the window Object / Methods / Properties

//window.console.log(134);

// Alert
//window.alert('hello');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Properties

let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.screenX;
val = window.screenY;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // search url

// redirect
//window.location.href = 'http://google.com';

// reload
//window.location.reload();

// History Object
//window.history.go(-1); // goes to previous visited
//val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
console.log(val);