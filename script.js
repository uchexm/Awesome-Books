const form = document.getElementById('book-form');
const bookContainer = document.querySelector('add');
// const bookName = form.title;
// const author = form.author;

const books = [];

class book {
  constructor(bookName, author) {
    this.title = bookName;
    this.author = author;
  }
}

const addBook = (bookName, author) => {
  books.push({
    bookName,
    author,
  });

  return { bookName, author };
};

const createBooks = ({ title, author }) => {
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');

  bookTitle.innerHTML = ` Title: ${title}`;
  bookAuthor.innerHTML = ` author: ${author}`;

  bookDiv.append(bookTitle, bookAuthor);
  bookContainer.appendChild(bookDiv);
};

books.forEach(createBooks);

books.push('uche', 'book');

//form.onsubmit = (e) => {
 // e.preventDefault();

  books.push('uche', 'book');
};