let logIn = document.querySelector('.logIn');
let signUp = document.querySelector('.signUp');


let name = document.getElementById('username');
let password = document.getElementById('password');
let valPassword = document.getElementById('repeat_password');
let addUser = document.getElementById('signup');

function Person(name, password) {
    this.name = name;
    this.password = password;
}

let mark = new Person(name, password)

console.log(mark);

addUser.addEventListener('click', createUser);






function createUser() {
    console.log('thanks!')
}

function logsIn() {
    logIn.style.display = 'block';
    signUp.style.display = 'none';
}

function signsUp() {
    logIn.style.display = 'none';
    signUp.style.display = 'block';
}

// class Store {
//     static getBooks() {
//         let books;
//         if (localStorage.getItem('books') === null) {
//             books = [];
//         } else {
//             books = JSON.parse(localStorage.getItem('books'));
//         }

//         return books;
//     }

//     static addBook(book) {
//         const books = Store.getBooks();
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static removeBook(isbn) {
//         const books = Store.getBooks();

//         books.forEach((book, index) => {
//             if (book.isbn === isbn) {
//                 books.splice(index, 1);
//             }
//         });

//         localStorage.setItem('books', JSON.stringify(books));
//     }
// }