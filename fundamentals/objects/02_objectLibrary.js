/*
Challenge: Manage a Library System using objects and arrays

Task:
1. Create an object called `library` with the following properties:
- `name` (a string, representing the name of the library)
- `location` (a string)
- `books` (an array of book objects, each with properties: `title`, `author`, `year`, `isAvailable`)
2. Add a method `addBook` to the `library` object that takes a book object as an argument and adds it to the `books` array.
3. Add a method `findBook` that searches for a book by title and returns the book object if found, or `null` if not found.
4. Add a method `listAvailableBooks` that returns an array of all books where `isAvailable` is `true`.

Example:
let library = {
  // Define properties and methods here
  };
  
  // Example usage:
  library.addBook({ title: "Dune", author: "Frank Herbert", year: 1965, isAvailable: true });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949, isAvailable: false });
  
  
  let availableBooks = library.listAvailableBooks();
  console.log(availableBooks);
  */

let library = {
  name: 'StaubRacing',
  location: 'Rosemount',
  books: [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      year: 1965,
      isAvailable: false,
    },
    {
      title: 'WeaveWorld',
      author: 'Clive Barker',
      year: 1987,
      isAvailable: true,
    },
  ],
  // Method to add a book
  addBook: function (newBook) {
    return this.books.push(newBook);
  },

  // Method to find a book
  findBook: function (titleOfBook) {
    return this.books.find(function (book) {
      return book.title === titleOfBook;
    });
  },

  // Method to list available books
  listAvailableBooks: function () {
    return this.books.filter(function (book) {
      return book.isAvailable === true;
    });
  },

  // Practice Challenge 1: Update Book Availability
  // TODO: Review this and see if you can just reference the function above to find the book
  toggleBookAvailability: function (titleOfBook) {
    const book = this.findBook(titleOfBook);

    if (book) {
      book.isAvailable = !book.isAvailable;
    }

    return book;
  },

  // Practice Challenge 2: List Books by Author
  findBooksByAuthor: function (authorName) {
    return this.books.filter(function (book) {
      return book.author === authorName;
    });
  },

  // Practice Challenge 3: Count Books
  countAllBooks: function () {
    return this.books.length;
  },

  // Practice Challenge 4: Create a Summary of All Books
  getLibrarySummary: function () {
    return this.books.map(function (book) {
      return `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`;
    });
  },
  // Challenge: Update book year
  updateBookYear: function (titleOfBook, updateYear) {
    const book = this.findBook(titleOfBook);

    if (book) {
      book.year = updateYear;
    } else {
      console.log('Book not found');
    }
  },

  // Challenge: Remove a book from Array
  removeBook: function (titleOfBook) {
    const book = this.findBook(titleOfBook);

    if (book) {
      const bookIndex = this.books.indexOf(book);
      this.books.splice(bookIndex, 1);
    }
  },

  // Challenge: Find books published before a certain year
  findBooksBeforeYear: function (yearOfBooks) {
    return this.books.filter((book) => {
      return book.year <= yearOfBooks;
    });
  },
};

// Function call to find books by author
let booksByCliveBarker = library.findBooksByAuthor('Clive Barker');
console.log('This is the find book by Author', booksByCliveBarker);

// Function call to add a book
library.addBook({
  title: 'The Dark Tower',
  author: 'Stephen King',
  year: 1985,
  isAvailable: true,
});
library.addBook({
  title: 'Jurassic Park',
  author: 'Michael Crichton',
  year: 1984,
  isAvailable: true,
});

// Function call to list available books
console.log('This is the library books', library.books);
console.log(
  'This is the list of available books',
  library.listAvailableBooks()
);

// Function call to toggle book availability
library.toggleBookAvailability('Dune');
console.log('Toggle the Availability', library.findBook('Dune'));

// Function call to toggle count of books
let totalBooks = library.countAllBooks();
console.log('Here is the toal books in the libary:', totalBooks);

// Function call to get library summaries
let summaries = library.getLibrarySummary();
console.log('Here is the library summaries', summaries);

// Function call to update book year
library.updateBookYear('Dune', 1968);
console.log('Here is the updated book year', library.findBook('Dune'));

// // Function to call to remove book
// library.removeBook("Dune");
// console.log("Here is the updated library", library.books);
// // "Dune" should no longer be in the `books` array.

// Function call to find book by title
let FindBookByTitle = library.findBook('Dune');
console.log('This is the find book by title', FindBookByTitle);

let oldBooks = library.findBooksBeforeYear(1985);
console.log('Here is the books before this year', oldBooks);
// Outputs an array of books published before 1980.
