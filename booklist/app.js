// Book Constructor
function Book(title, author ,isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// event listener for addbook
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="x" class="delete">x</a></td>
  `;

  list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function(message, className){
  // create div
  const div = document.createElement('div');
  // add class
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#book-form');
  // insert alert
  container.insertBefore(div, form);

  // timeout 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove()}, 3000);
}

// clear fields after adding book
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// delete book
UI.prototype.deleteBook= function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Event listeners add book
document.getElementById('book-form').addEventListener('submit', 
  function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // instantiate book
    const book = new Book(title, author, isbn);
    // instaniat ui
    const ui = new UI();
    // validate 
    if(title === '' || author === '' || isbn === ''){
      // Error alert
      ui.showAlert('Please enter all fields', 'error');
    } else {
      // add book to list
      ui.addBookToList(book);

      // show success
      ui.showAlert('book added!', 'success');

      // clear fields
      ui.clearFields();
    }

    //console.log(book);
    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  // instaniat ui
  const ui = new UI();
  // delete book
  ui.deleteBook(e.target);
  // show message
  ui.showAlert('book removed', 'success');

  e.preventDefault();
})