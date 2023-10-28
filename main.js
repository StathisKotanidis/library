const myLibrary = [];

let openFormButton = document.querySelector('#open-form')
let bookForm = document.querySelector('.book-form')
let body = document.querySelector('body')
let addBookButton = document.querySelector('#add-book')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function render() {
//     let eachBook = document.querySelector('.bookCard')
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(myLibrary[i]);
//     }
// }

function addBookToLibrary() {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let isRead = document.querySelector('input[name="radio-options"]:checked');
    if (isRead) {
        let read = isRead.value;

        let newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook)
        console.log(newBook)
        // render()
    }
}

addBookButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
})

openFormButton.addEventListener('click', (event) => {
    bookForm.style.display = 'block';
    event.stopPropagation();
})

body.addEventListener('click', (event) => {
    if (!bookForm.contains(event.target)) {
        bookForm.style.display = 'none'
    }
})



