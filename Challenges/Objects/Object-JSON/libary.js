import books from "./books.json" assert { type: "json" };

const library = {
  books: books,

  // Method to find a book
  findBook: function (titleOfBook) {
    return this.books.find(function (book) {
      return book.title === titleOfBook;
    });
  },
  // Method to add a book
  addBook: function (newBook) {
    return this.books.push(newBook);
  },
};

library.addBook({
  title: "Jurassic Park",
  author: "Michael Crichton",
  year: 1984,
  isAvailable: true,
});

// Function call to add a book

console.log(library.findBook("Dune"));
