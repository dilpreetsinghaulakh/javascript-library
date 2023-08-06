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

  closeForm()

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
  let card = document.createElement("div");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let deleteBtn = document.createElement("button");
  let readStatus = document.createElement("button");

  card.className = "card";

  bookTitle.textContent = book.title;
  bookTitle.className = "title";

  bookAuthor.textContent = "By " + book.author;
  bookAuthor.className = "author";

  bookPages.textContent = book.pages;
  bookPages.className = "pages";

  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deleteBook(book.id);

  readStatus.classList.add("readStatus");
  if (book.isRead) {
    readStatus.textContent = "Read";
    readStatus.className = "read";
  } else {
    readStatus.textContent = "Not Read";
    readStatus.className = "not-read";
  }
  readStatus.onclick = () => toggleRead(book.id);

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(readStatus);
  card.appendChild(deleteBtn);
  booksOutput.appendChild(card);
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

const addBookBtn = document.getElementById("addABook");
var bookFormOpen = false;

addBookBtn.addEventListener("click", () => {
  if (!bookFormOpen) {
    inputBookForm.classList.add("open");
  }
  bookFormOpen = !bookFormOpen;
});

const closeFormBtn = document.getElementById("closeForm");

closeFormBtn.addEventListener("click", () => {
  closeForm();
});

const closeForm = () => {
  if (bookFormOpen) {
    inputBookForm.classList.remove("open");
  }
  inputBookForm.reset()
  bookFormOpen = !bookFormOpen;
};
