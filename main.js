const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (this.read == 'read') {
            return console.log(`The ${this.title} by ${this.author}, ${this.pages} pages,read`)
        } else {
            return console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, not read yet`)
        }
    }
}

let book1 = new Book("Mamba Mentality", "Kobe Bryant", '319', 'read')
let book2 = new Book("LOTR Two Towers", "J.R.R Tokien", '462', 'not read')

book1.info()
book2.info()

let openFormButton = document.querySelector('#open-form')
let bookForm = document.querySelector('.book-form')
let body = document.querySelector('body')

openFormButton.addEventListener('click', () => {
    bookForm.style.display = 'block';
    event.stopPropagation();
})

body.addEventListener('click', (event) => {
    // Check if the clicked element is not the form or one of its descendants
    if (!bookForm.contains(event.target)) {
        bookForm.style.display = 'none';
    }
});
