const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputIsRead = document.getElementById("isRead");
const inputBookForm = document.getElementById("newBookForm");
const booksOutput = document.getElementById("books");

let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const addBook = () => {
  let newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputIsRead.checked
  );
  myLibrary.push(newBook);
  printBooks();
};

inputBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&:    B@@@@#.
//   ~@@@@@P        !@@&.    B@@@@#.
//   .B@@@@&^       5@@G     B@@@@#.
//    :P@@@@&Y7~~!?B@@G:     B@@@@#.
//      ^?5G#&&@&##GJ~       G@@@@#.

const printBooks = () => {
  if (myLibrary.length === 0) {
    let p = document.createElement("p");
    p.textContent = "Please add book(s)";
    p.id = "noBook";
    booksOutput.appendChild(p);
  } else {
    let noBookP = document.getElementById("noBook");
    if (booksOutput.contains(noBookP)) {
      booksOutput.removeChild(noBookP)
    }
    for (let i = 0; i < myLibrary.length; i++) {
      let object = myLibrary[i];
      console.log(object)
      let bookInfo = document.createElement("p"); // Temporary
      bookInfo.textContent = object.title + " by " + object.author + " having " + object.pages + " pages.";
      booksOutput.appendChild(bookInfo);
    }
  }
};

printBooks();
