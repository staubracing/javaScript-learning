// Mapping Challenge 01
// Given an array of strings representing names, use .map() to create a new array where each name is transformed to uppercase.

let names = ['alice', 'bob', 'charlie', 'dave'];

let uppercasedNames = names.map(function (names) {
  return names.toUpperCase();
});

console.log(uppercasedNames);
