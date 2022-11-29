const body = document.querySelector('.body-1');
let bookno= 1;
let bookLists = [
];

function printfn() {
  body.replaceChildren();
  const localbooks = JSON.parse(localStorage.getItem('books'));
  bookLists=localbooks;
  localbooks.forEach(book => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p>${book.Title}</p>
    <p>${book.Author}</p>
    <button type="button" id=${book.id} value="Remove">Remove</button>
    <hr>
    `;
    body.append(newDiv);
  
  });

}

if (localStorage.getItem('books')){
  printfn();
}

const addBtn = document.getElementById('btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

addBtn.addEventListener('click', () => {
  if (title.value!='' && author.value!='') {
  bookLists.push(
  {
    id: 'book'+bookno,
    Title: title.value,
    Author: author.value
  });
  localStorage.setItem('books', JSON.stringify(bookLists));
  printfn();
  bookno+=1;
  document.forms[0].reset();
}
});

document.addEventListener('click', removed=>{
 const {id} = removed.target;
 if (id.substr(0,4)=== 'book'){
  const item = document.getElementById(id);
  item.parentElement.remove();
  bookLists= bookLists.filter(b=> b.id !== id);
  localStorage.setItem('books', JSON.stringify(bookLists));
 }
})