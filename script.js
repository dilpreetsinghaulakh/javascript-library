const inputBookForm = document.getElementById("newBookForm");
const booksOutput = document.getElementById("books");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  deleteBook(uniqueId) {
    this.books = this.books.filter((book) => {
      return book.id !== uniqueId;
    });
  }

  toggleRead(uniqueId) {
    let foundBook = this.books.find((book) => {
      return book.id === uniqueId;
    });

    foundBook.isRead = !foundBook.isRead;
  }
}

let library = new Library();

var bookUniqueId = 0;

class Book {
  constructor(uniqueId, title, author, pages, isRead) {
    this.id = uniqueId;
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

  bookUniqueId++;

  return new Book(
    bookUniqueId,
    title.value,
    author.value,
    pages.value,
    isRead.checked
  );
};

inputBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBook = createBookFromInput();
  library.addBook(newBook);

  console.log(library);

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
  let deleteBtn = document.createElement("button");
  let readStatus = document.createElement("button");

  bookInfo.textContent =
    book.title + " by " + book.author + " having " + book.pages + " pages.";

  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deleteBook(book.id);

  readStatus.classList.add("readStatus");
  if (book.isRead) {
    readStatus.textContent = "Read";
  } else {
    readStatus.textContent = "Not Read";
  }
  readStatus.onclick = () => toggleRead(book.id)

  booksOutput.appendChild(bookInfo);
  booksOutput.appendChild(deleteBtn);
  booksOutput.appendChild(readStatus);
};

const deleteBook = (uniqueId) => {
  library.deleteBook(uniqueId);
  updateBooksView();
};

const toggleRead = (uniqueId) => {
  library.toggleRead(uniqueId);
  updateBooksView();
};

updateBooksView();
