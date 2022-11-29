const body = document.querySelector('.body-1');
const bookLists = [
  {
   Title: 'Alchemy',
   Author: 'Shakespeare'
  },
  {
    Title: 'Sparrow',
    Author: 'Jack Hensaw'
  },
  {
    Title: 'Spark',
    Author: 'Hack Jensaw'
  }
];

function printfn() {
  bookLists.forEach(book => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p>${book.Title}</p>
    <p>${book.Author}</p>
    <button type="button" value="Remove">Remove</button>
    <hr>
    `;
    body.append(newDiv);
  
  });

}

const addBtn = document.getElementById('btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

addBtn.addEventListener('click', () => {
  bookLists.push(
  {
    Title: title.value,
    Author: author.value
  });
  localStorage.setItem('books', JSON.stringify(bookLists));
  printfn();
});





