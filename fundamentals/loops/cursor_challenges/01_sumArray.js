/*
Challenge 1: Sum of an Array
Write a loop to calculate the sum of all numbers in an array.
*/
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // Output should be 15
