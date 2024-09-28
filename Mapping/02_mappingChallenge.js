/* Challenge 02: Extracting Property Values

 You have an array of objects representing people. Each person has a `name` and an `age` property. 
 Your task is to use `.map()` to create a new array containing only the names of the people.

 Given:

 Expected Output: ["Alice", "Bob", "Charlie", "Dave"]

 Instructions:
 1. Use the `.map()` method to extract the `name` property from each object in the `people` array.
 2. Store the resulting array of names in a variable called `names`.
*/

let people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 },
];

let names = people.map((nameOfPeople) => nameOfPeople.name);

console.log(names);
