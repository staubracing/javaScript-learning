/*
Challenge: Working with Objects

Task:
1. Create an object called `book` with the following properties:
   - `title` (a string)
   - `author` (a string)
   - `year` (a number)
   - `isAvailable` (a boolean)
2. Add a method `getSummary` that returns a string summarizing the book's details.
3. Add a method `toggleAvailability` that changes the `isAvailable` property to its opposite value (i.e., from `true` to `false` or vice versa).

Example:
let book = {
  // Define properties and methods here
};

book.toggleAvailability();
console.log(book.getSummary());
*/
let book = {
  title: 'Weaveworld',
  author: 'Clive Barker',
  year: 1972,
  isAvailable: true,
  getSummary: function () {
    return "The book is about the adventures of a carpet and Cal it's protector";
  },
  toggleAvailability: function () {
    this.isAvailable = !this.isAvailable;
  },
};

console.log(book.getSummary());
book.toggleAvailability();
console.log(book.isAvailable);
book.toggleAvailability();
console.log(book.isAvailable);
book.toggleAvailability();
console.log(book.isAvailable);
