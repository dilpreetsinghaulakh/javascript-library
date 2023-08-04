const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputIsRead = document.getElementById("isRead");
const inputBookForm = document.getElementById("newBookForm");

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
  console.log(newBook);
  console.log(myLibrary);
};

inputBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&:    B@@@@@#.
//   ~@@@@@@P        !@&.    B@@@@@#.
//   .B@@@@@&^       5@G     B@@@@@#.
//    :P@@@@@&Y7~~!?B@G:     B@@@@@#.
//      ^?5G#&&@&##GJ~       G@@@@@#.
