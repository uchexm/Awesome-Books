// eslint-disable-next-line max-classes-per-file
class Bookdata {
  constructor(id, title, author) {
    this.Id = id;
    this.Title = title;
    this.Author = author;
  }
}

class Books {
  bookLists = [
  ];

  bookno = 1;

  constructor(book) {
    this.Book = book;
  }

  printfn() {
    const body = document.querySelector('.body-1');
    body.replaceChildren();
    const localbooks = JSON.parse(localStorage.getItem('books'));
    this.bookLists = localbooks;
    let index = 1;
    localbooks.forEach((book) => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
      <p>"${book.Title}" by ${book.Author}</p>
      <button type="button" class="remove" id=${book.Id} value="Remove">Remove</button>
      `;
      if (index % 2 !== 0) {
        newDiv.classList.add('blue');
      }
      newDiv.classList.add('book-line');
      body.append(newDiv);
      index += 1;
    });
  }

  addbooks(title, author) {
    this.Book = new Bookdata(`book${this.bookno}`, title, author);
    this.bookLists.push(
      this.Book,
    );
    localStorage.setItem('books', JSON.stringify(this.bookLists));
    this.printfn();
    this.bookno += 1;
  }

  deletebook(id) {
    const item = document.getElementById(id);
    item.parentElement.remove();
    this.bookLists = this.bookLists.filter((b) => b.Id !== id);
    localStorage.setItem('books', JSON.stringify(this.bookLists));
  }
}

const bookstore = new Books();

if (localStorage.getItem('books')) {
  bookstore.printfn();
}

const addBtn = document.getElementById('btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    bookstore.addbooks(title.value, author.value);
    document.forms[0].reset();
  }
});

document.addEventListener('click', (removed) => {
  const { id } = removed.target;
  if (id.substr(0, 4) === 'book') {
    bookstore.deletebook(id);
  }
});