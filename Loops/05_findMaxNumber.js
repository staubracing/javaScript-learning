/*
Challenge: Find the Maximum Number in an Array

Task:
Write a function that takes an array of numbers as input and returns the maximum number in the array.

Steps:
1. Initialize a variable to store the maximum value (you can start with the first element in the array).
2. Use a `for` loop to iterate through the array.
3. During each iteration, compare the current element with the stored maximum value.
4. If the current element is greater, update the maximum value.
5. Return the maximum value after the loop finishes.

Example:
let numbers = [3, 7, 2, 9, 4, 15, 1];
let maxNumber = findMax(numbers);
console.log(maxNumber);  // Output should be 15
*/

// function findMax(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// // Test arrays
// let numbers = [3, 7, 2, 9, 4, 15, 1];
// let maxNumber = findMax(numbers);
// console.log("Maximum Number:", maxNumber);

function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array case
  }

  let max = arr[0]; // Assume the first element is the max

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const numbers = [10, 5, 8, 20, 3];
const maxNumber = findMax(numbers);

console.log("Maximum number:", maxNumber); // Output: 20
