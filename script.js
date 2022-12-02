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
   
    this.bookLists = this.bookLists.filter((b) => b.Id !== id);
    localStorage.setItem('books', JSON.stringify(this.bookLists));
    this.printfn();
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
document.getElementById('lis').classList.add('active');


document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';

document.querySelector('#con').addEventListener('click', () => {
  document.getElementById('con').classList.add('active');
  document.getElementById('lis').classList.remove('active');
  document.getElementById('new').classList.remove('active');
  document.querySelector('.contact').style.display = 'block';
  document.querySelector('.book').style.display = 'none';
  document.querySelector('.add').style.display = 'none';
});

document.querySelector('#new').addEventListener('click', () => {
  document.getElementById('new').classList.add('active');
  document.getElementById('con').classList.remove('active');
  document.getElementById('lis').classList.remove('active');
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'none';
  document.querySelector('.add').style.display = 'block';
});

document.querySelector('#lis').addEventListener('click', () => {
  document.getElementById('lis').classList.add('active');
  document.getElementById('con').classList.remove('active');
  document.getElementById('new').classList.remove('active');
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';
});

document.querySelector('#logo').addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';
});

const now = new Date();
document.getElementById('date').innerHTML = now;