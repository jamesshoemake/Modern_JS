// Asynchronous Javascript & XML
// AJAX
// Most tend to return JSON now instead of XML

document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN type file, async true
  xhr.open('GET', 'data.txt', true);

  // readyState not use with more current code
  // console.log('READYSTATE', xhr.readyState);

  // optional - use for loading
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
    // spinner or loading...
  }
  
  // http statuses
  // 200: "ok"
  // 403: "forbidden"
  // 404: "not found"

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML =`<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function(){
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Errored');
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready

}