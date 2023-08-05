const inputBookForm = document.getElementById("newBookForm");
const booksOutput = document.getElementById("books");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => {
      book.title !== title;
    });
  }
}

let library = new Library();

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const createBookFromInput = () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const isRead = document.getElementById("isRead");

  return new Book(title.value, author.value, pages.value, isRead.checked);
};

inputBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBook = createBookFromInput();
  library.addBook(newBook);

  updateBooksView();
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

// const updateBooksView = () => {
//   booksOutput.replaceChildren();
//   if (library.length === 0) {
//     let p = document.createElement("p");
//     p.textContent = "Please add book(s)";
//     booksOutput.appendChild(p);
//   } else {
//     for (let i = 0; i < library.length; i++) {
//       let object = library[i];
//       let bookTitle = object.title;
//       let bookInfo = document.createElement("p"); // Temporary
//       bookInfo.textContent =
//         object.title +
//         " by " +
//         object.author +
//         " having " +
//         object.pages +
//         " pages.";
//       booksOutput.appendChild(bookInfo);

//       let deleteBtn = document.createElement("button");
//       deleteBtn.setAttribute("id", i);
//       deleteBtn.classList.add("delete");
//       deleteBtn.textContent = "Delete";
//       booksOutput.appendChild(deleteBtn);

//       deleteBtn.addEventListener("click", () => {
//         Library.removeBook(bookTitle);
//         printBooks();
//       });
//     }
//   }
// };

const updateBooksView = () => {
  resetBooksView();

  for (let book of library.books) {
    createBookCard(book);
  }
};

const resetBooksView = () => {
  booksOutput.innerHTML = "";
};

const createBookCard = (book) => {
  let bookInfo = document.createElement("p"); // Temporary

  bookInfo.textContent =
    book.title + " by " + book.author + " having " + book.pages + " pages.";
  booksOutput.appendChild(bookInfo);
};

updateBooksView();
