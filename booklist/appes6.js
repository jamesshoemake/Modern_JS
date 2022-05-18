class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
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

  showAlert(message, className){
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

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// clocal storage class
class Store {
  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;

      // add book to ui
      ui.addBookToList(book);
    })
  }
  
  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  
  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index);
      }
    });
    
    localStorage.setItem('books', JSON.stringify(books));
  }
} 

// DOM load event
document.addEventListener('DOMContentLoad', Store.displayBooks());

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
      // add to local storage
      Store.addBook(book);

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

  // remove from ls
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show message
  ui.showAlert('book removed', 'success');

  e.preventDefault();
})